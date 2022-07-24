import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Character = lazy(() => import("../pages/Character"));
const Favoritos = lazy(() => import("../pages/Favoritos"));
const Characters = lazy(() => import("../pages/Characters"));

import Spinner from "../components/Spinner";
import Page404NotFound from "../pages/Page404NotFound";

const AppRouter = () => {
  return (
    <main className="flex-grow">
      <Suspense fallback={<Spinner fullScreen={true} />}>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/c/:id" element={<Character />} />
          <Route path="*" element={<Page404NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default AppRouter;
