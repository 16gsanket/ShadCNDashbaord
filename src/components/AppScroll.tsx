"use client"
import React,{useState} from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CalendarRangeIcon } from "lucide-react";
import { formatDate } from "date-fns";
import { Calendar } from "./ui/calendar";

function AppScroll() {

  const[date , setDate] = useState<Date | undefined>()
  const[open , setOpen] = useState(false)
  return (
    <ScrollArea className="lg:h-[500px] h-[400px] ">
      <div className="h-fit">
        {/* Popover with calendar */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="w-full">
              <CalendarRangeIcon/>
              {date ? formatDate(date , "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
             <Calendar
      mode="single"
      selected={date}
      onSelect={(date)=>{
        setDate(date)
        setOpen(false)
      }
      }
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
          </PopoverContent>
        </Popover>
      </div>
      <h1 className="font-semibold text-md text-center mt-5">To - Do</h1>
      <ScrollArea className="w-full rounded-md border">
        <div className="p-4">
          {/* <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4> */}

          <div className="flex items-center gap-3 flex-col">
            {[...Array(10)].map((_, i) => (
              <Card className="w-full p-2">
                <Label key={i} htmlFor={`terms${i}`}>
                  <Checkbox id={`terms${i}`} />
                  <span className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Lorem ipsum dolor sit amet. {i}
                  </span>
                </Label>
              </Card>
            ))}
          </div>
        </div>
      </ScrollArea>
    </ScrollArea>
  );
}

export default AppScroll;
