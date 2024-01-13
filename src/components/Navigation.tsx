"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div
      style={{ left: "20%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
    >

      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
 


/* import Link from 'next/link';
import { NavLinks } from '../constants/index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navigation = () => {
    const router = useRouter();
    const [isRouting, setIsRouting] = useState(false);
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if (prevPath !== router.pathname) {
            setIsRouting(true);
        }
    }, [router.pathname, prevPath]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(router.pathname);
            const timeout = setTimeout(() => {
                setIsRouting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRouting, router.pathname]);

    return (
        <div className='navigation'>
            {NavLinks.map((nav) => (
                <Link key={nav.name} href={nav.link}>
                    <a className={`navigation-link ${router.pathname === nav.link ? "active" : ""}`}>
                        {nav.name}
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default Navigation; */


/* import Link from 'next/link';
import { NavLinks } from '../constants/index';
import { usePathname, useClient } from 'next/navigation'; // Import useClient from next/navigation
import React, { useEffect, useState } from 'react';

const Navigation = () => {
    const [isRouting, setisRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");
    const client = useClient(); // Use useClient hook

    useEffect(() => {
        if(prevPath !== path) {
            setisRouting(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if(isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setisRouting(false);
            }, 1200);
               
            return () => clearTimeout(timeout);
        }
    }, [isRouting]);

    return (
        <div
            style={{left: "20%"}}
            className='absolute z-[50] bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify between items-center border border-white'
        >
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className='mb-16 pl-16 min-w-[20%]'
                >
                    <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text.purple-800" : "text-white"}`} />
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
 */

/* 
import Link from 'next/link'
import { NavLinks } from '../constants/index'

import { usePathname } from 'next/navigation'; // Import useClient from next/navigation
import React, { useEffect, useState, } from 'react'

 const Navigation = () => {
    const [isRouting, setisRouting] = useState(false)
    const path = usePathname()
    const [prevPath, setPrevPath] = useState("/")


    useEffect(() => {

        if(prevPath !== path) {
            setisRouting(true)
        }
    }, [path, prevPath])

    useEffect(() => {
        if(isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setisRouting(false)
            }, 1200)
               
            return() => clearTimeout(timeout)
        }
    }, [isRouting] )

  return (
      <div
      style={{left: "20%"}}
      className='absolute z-[50] bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify between items-center border border-white  '>
        {NavLinks.map((nav) => (
            <Link
            key={nav.name}
            href={nav.link}
            className='mb-16 pl-16 min-w-[20%]'
            >
                <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text.purple-800": "text-white"}`} />
            </Link>
        ))}
      </div>
  );
};

export default Navigation 

  */