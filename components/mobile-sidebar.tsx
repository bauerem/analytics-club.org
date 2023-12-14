"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from '@/components/sidebar'
import NavMenu from './nav-menu'

export default function MobileSidebar() {

  const [isMounted, setIsMounted] = useState(false);

  const textColor = 'gray-300';
  const hoverTextColor = 'white';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className={`h-full bg-primary text-${textColor} hover:text-${hoverTextColor}`}>
        <NavMenu dropdown />
      </SheetContent>
    </Sheet>
  )
}