import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="hover:text-white transition-all">Shop</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        
       <DropdownMenuLabel>Products</DropdownMenuLabel>
       <DropdownMenuSeparator className="mx-auto my-1 h-px w-[95%]  bg-white/10"/>
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:text-white transition-all">Woman</DropdownMenuItem>
          <DropdownMenuItem className="hover:text-white transition-all">Man</DropdownMenuItem>
        </DropdownMenuGroup>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}