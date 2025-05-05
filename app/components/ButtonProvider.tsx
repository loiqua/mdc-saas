import { Button } from "@/components/ui/button";

export default function ButtonProvider() {
  return (
    <div className="flex flex-col gap-y-5">
      <Button>sign in with google</Button>
      <Button>sign in with github</Button>
    </div>
  );
}
