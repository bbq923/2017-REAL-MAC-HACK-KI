package com.amigotrip.android.adpaters

import android.support.v4.app.Fragment
import android.support.v4.app.FragmentManager
import android.support.v4.app.FragmentStatePagerAdapter

/**
 * Created by Zimincom on 2017. 10. 22..
 */
class IntroPagerAdapter(fm: FragmentManager) : FragmentStatePagerAdapter(fm) {

    private val introPageList = arrayListOf<Fragment>()

    override fun getItem(position: Int): Fragment = introPageList[position]

    override fun getCount(): Int = introPageList.size

    fun addFragment(fragment: Fragment) {
        introPageList.add(fragment)
    }
}