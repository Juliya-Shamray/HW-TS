import { Route, Routes } from "react-router-dom";
import {
  HomeFeature,
  ContactsFeature,
  AboutUsFeature,
  GalleryFeature,
  PostFeature,
} from "../../features";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />

    <Route path="/contacts" element={<ContactsFeature />} />
    <Route path="/gallery" element={<GalleryFeature />} />

    <Route path="/aboutUs" element={<AboutUsFeature />} />
    <Route path="/post/:postId" element={<PostFeature />} />
  </Routes>
);
