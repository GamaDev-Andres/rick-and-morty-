import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "../components/Spinner";
const Character = lazy(() => import("../components/Character"));
const Home = lazy(() => import("../components/Home"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Spinner fullScreen={true} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/c/:id" element={<Character />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
