import {load} from '@cashfreepayments/cashfree-js';
// For Testing
export const cashfree = await load({
	mode: "sandbox"
});

// For Production
// export const cashfree = await load({
// 	mode:"production"
// });
