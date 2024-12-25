import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PhotoGallery from './components/PhotoGallery';
import UploadPage from './components/UploadPage';
import CameraUpload from './components/CameraUpload';
import TripUpload from './components/TripUpload';
import PhotoUpload from './components/PhotoUpload';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/gallery/:photoId',
    element: <PhotoGallery />
  },
  {
    path: '/upload',
    element: <UploadPage />
  },
  {
    path: '/upload/camera',
    element: <CameraUpload />
  },
  {
    path: '/upload/trip',
    element: <TripUpload />
  },
  {
    path: '/upload/photo',
    element: <PhotoUpload />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);