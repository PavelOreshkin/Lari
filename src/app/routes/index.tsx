import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";

const Main = lazy(() => import("@/pages/main"));
const NotFound = lazy(() => import("@/pages/not-found"));

const MainRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" Component={Main} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
