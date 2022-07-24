import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Character = lazy(() => import("../pages/Character"));
const Favoritos = lazy(() => import("../pages/Favoritos"));
const Characteres = lazy(() => import("../pages/Characteres"));

import Spinner from "../components/Spinner";

const AppRouter = () => {
  return (
    <main className="flex-grow">
      <Suspense fallback={<Spinner fullScreen={true} />}>
        <Routes>
          <Route path="/" element={<Characteres />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/c/:id" element={<Character />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default AppRouter;
