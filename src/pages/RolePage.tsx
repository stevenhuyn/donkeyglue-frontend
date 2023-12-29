import { A } from "@solidjs/router";

export const RolePage = () => {
  return (
    <>
      <h1 class="font-light text-4xl m-6">Welcome to Donkey Glue</h1>
      <h2 class="font-light text-2xl m-8">Choose your Role</h2>
      <div class="flex justify-center space-x-4">
        <A role="button" class="btn" href="/game?role=RedSpymaster">
          Red Spymaster
        </A>
        <A role="button" class="btn" href="/game?role=RedOperative">
          Red Operative
        </A>
      </div>
    </>
  );
};
