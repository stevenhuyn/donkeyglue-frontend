import { A } from "@solidjs/router";

export const RolePage = () => {
  return (
    <>
      <h1 class="font-light text-4xl m-6">Welcome to Donkey Glue</h1>
      <h2 class="font-light text-2xl m-8">Choose your Role</h2>
      <div>
        <A role="button" class="btn mx-3" href="/game?role=RedSpymaster">
          Red Spymaster
        </A>
        <A role="button" class="btn mx-3" href="/game?role=RedOperative">
          Red Operative
        </A>
      </div>
    </>
  );
};
