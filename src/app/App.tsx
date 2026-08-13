import { RouterProvider } from 'react-router';
import { router } from './routes';
import React, { useState, useEffect } from "react";

export default function App() {

  
  return <RouterProvider router={router} />;
}