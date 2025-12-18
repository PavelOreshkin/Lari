import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";

const MainRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" Component={() => <div>home</div>} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
