// /pages/sign.js

import React from "react";
import dynamic from "next/dynamic";
const SignInComponent = dynamic(() => import("/pages/app/components/pages/signin/signin?prop=signup"));

function Sign() {
  return <SignInComponent />;
}

export default Sign;
