//  import test from "./test";

//  const run = () => {
//      console.log('Yes i am run');
// };
//  test();

  import Highway from "@dogstudio/highway";
  import Fade from "./trans";

  const H = new Highway.Core({
      transitions: {
          default: Fade
      }
 });
