import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'

const popularContent =[
    {
        id:1,
        title:"JavaScript Tutorial",
        badge:"Coding",
        image:"https://res.cloudinary.com/ddodvrq4x/image/upload/v1689593826/cld-sample-2.jpg",
        count: 4300
    },
    {
        id:2,
        title : "Tech Trends 2025",
        badge:"Tech",
        image:"https://res.cloudinary.com/ddodvrq4x/image/upload/v1689593826/cld-sample-2.jpg",
        count:3200
    },
     {
        id:3,
        title:"Future of AI",
        badge:"Coding",
        image:"https://res.cloudinary.com/ddodvrq4x/image/upload/v1689593826/cld-sample-2.jpg",
        count: 2300
    },
    {
        id:4,
        title : "React Hooks Explained",
        badge:"Tech",
        image:"https://res.cloudinary.com/ddodvrq4x/image/upload/v1689593826/cld-sample-2.jpg",
        count:1200
    },
]

const latestTransactions = [
    {id: 1,
        title:"Subscription Renewal",
        badge:"Michael Johnson",
        image:"https://res.cloudinary.com/ddodvrq4x/image/upload/v1689593826/cld-sample.jpg",
        count:1300
    },
    {id: 2,
        title:"Subscription Renewal",
        badge:"Lily Adams",
        image:"https://res.cloudinary.com/ddodvrq4x/image/upload/v1689593827/cld-sample-3.jpg",
        count:1300
    },
    {id: 3,
        title:"Payment for Service",
        badge:"Aniruddha Joshi",
        image:"https://res.cloudinary.com/ddodvrq4x/image/upload/v1715441633/wiruxoypcxx6rnh9kaql.png",
        count:1300
    },
    {id: 4,
        title:"Subscription Renewal",
        badge:"Snlet Wang",
        image:"https://res.cloudinary.com/ddodvrq4x/image/upload/v1716535439/qico8zrivvmw3weszpbd.jpg",
        count:1100
    },
    {id: 5,
        title:"Payment for Service",
        badge:"Johnson and Johnson",
        image:"https://res.cloudinary.com/ddodvrq4x/image/upload/v1689593826/cld-sample-2.jpg",
        count:1800
    }
]

function CardList({title}:{title:string}) {

    const list= title=== "Popular Content" ? popularContent : latestTransactions

  return (
    <div>
        <h1 className='text-center font-semibold text-md'>{title}</h1>
        <div className="flex flex-col gap-2">
            {list.map(item=>(
                <Card key={item.id} className='flex-row items-center justify-between gap-3'>
                    <div className='w-15 h-15 rounded-sm relative overflow-hidden pl-4'>
                            <Image src={item.image} alt={item.title} fill className="object-cover ml-1" />
                    </div>            
                    <CardContent className='p-0 '>
                        <CardTitle className='text-sm font-semibold'>{item.title}</CardTitle>
                        <Badge variant="outline">{item.badge}</Badge>
                    </CardContent>
                    <CardFooter>{item.count}</CardFooter>
                </Card>
            ))}


        </div>
    </div>
  )
}

export default CardList