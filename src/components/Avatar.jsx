import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Avatar({ user, logout }) {
  return (
    <div className="py-2 px-4 text-[#fe7f6d] rounded-full ml-16 border-2 border-[#fe7f6d]">
      <DropdownMenu>
        <DropdownMenuTrigger>{user}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => logout()}>
            Se deconnecté
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
