'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useBoolean } from 'ahooks'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/20/solid' // Import icons for light/dark toggle
import HeaderBillingBtn from '../billing/header-billing-btn'
import AccountDropdown from './account-dropdown'
import AppNav from './app-nav'
import DatasetNav from './dataset-nav'
import EnvNav from './env-nav'
import ExploreNav from './explore-nav'
import ToolsNav from './tools-nav'
import GithubStar from './github-star'
import { WorkspaceProvider } from '@/context/workspace-context'
import { useAppContext } from '@/context/app-context'
import LogoSite from '@/app/components/base/logo/logo-site'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'
import { useProviderContext } from '@/context/provider-context'
import { useModalContext } from '@/context/modal-context'

const navClassName
  = 'flex items-center relative mr-0 sm:mr-3 px-3 h-8 rounded-xl font-medium text-sm cursor-pointer'

const Header = () => {
  const { isCurrentWorkspaceEditor } = useAppContext()

  const selectedSegment = useSelectedLayoutSegment()
  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile
  const [isShowNavMenu, { toggle, setFalse: hideNavMenu }] = useBoolean(false)
  const { enableBilling, plan } = useProviderContext()
  const { setShowPricingModal, setShowAccountSettingModal } = useModalContext()
  const isFreePlan = plan.type === 'sandbox'

  const handlePlanClick = useCallback(() => {
    if (isFreePlan)
      setShowPricingModal()
    else
      setShowAccountSettingModal({ payload: 'billing' })
  }, [isFreePlan, setShowAccountSettingModal, setShowPricingModal])

  useEffect(() => {
    hideNavMenu()
  }, [selectedSegment])

  // Dark mode state and toggle functionality
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Function to toggle theme
  const toggleTheme = () => {
    const html = document.documentElement
    if (isDarkMode) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setIsDarkMode(!isDarkMode)
  }

  // Load the saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  }, [])

  return (
    <div className='flex flex-1 items-center justify-between px-4'>
      <div className='flex items-center'>
        {isMobile && <div
          className='flex items-center justify-center h-8 w-8 cursor-pointer'
          onClick={toggle}
        >
          <Bars3Icon className="h-4 w-4 text-gray-500 dark:text-gray-300" />
        </div>}
        {!isMobile && <>
          <Link href="/apps" className='flex items-center mr-4'>
            <LogoSite className='object-contain' />
          </Link>
          <GithubStar />
        </>}
      </div>
      {isMobile && (
        <div className='flex'>
          <Link href="/apps" className='flex items-center mr-4'>
            <LogoSite />
          </Link>
          <GithubStar />
        </div>
      )}
      {!isMobile && (
        <div className='flex items-center'>
          <ExploreNav className={navClassName} />
          <AppNav />
          {isCurrentWorkspaceEditor && <DatasetNav />}
          <ToolsNav className={navClassName} />
        </div>
      )}
      <div className='flex items-center flex-shrink-0'>
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className='p-2 rounded-full'>
          {isDarkMode ? <SunIcon className="h-6 w-6 text-yellow-500" /> : <MoonIcon className="h-6 w-6 text-gray-500" />}
        </button>
        <EnvNav />
        {enableBilling && (
          <div className='mr-3 select-none'>
            <HeaderBillingBtn onClick={handlePlanClick} />
          </div>
        )}
        <WorkspaceProvider>
          <AccountDropdown isMobile={isMobile} />
        </WorkspaceProvider>
      </div>
      {(isMobile && isShowNavMenu) && (
        <div className='w-full flex flex-col p-2 gap-y-1'>
          <ExploreNav className={navClassName} />
          <AppNav />
          {isCurrentWorkspaceEditor && <DatasetNav />}
          <ToolsNav className={navClassName} />
        </div>
      )}
    </div>
  )
}
export default Header
