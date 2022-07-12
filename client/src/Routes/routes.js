import { Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';

const SignIn = React.lazy(() => import('../Containers/Login'));
const MyListings = React.lazy(() => import('../Components/MyListings'));
const ProtectedRoute = React.lazy(() => import('../Components/ProtectedRoute'));
const Home = React.lazy(() => import('../Containers/Home'));
const Favourites = React.lazy(() => import('../Containers/Favourites'));
const About = React.lazy(() => import('../Containers/About'));
const Search = React.lazy(() => import('../Containers/Search'));
const Register = React.lazy(() => import('../Containers/Register'));
const DetailListing = React.lazy(() => import('../Containers/DetailListing'));
const Profile = React.lazy(() => import('../Components/Profile'));
const LNavbar = React.lazy(() => import('../Components/LNavbar'));
const LAddListing = React.lazy(() => import('../Components/LAddListing'));
const Loader = React.lazy(() => import('../Components/Loader'));

const routes = [
	{
		element: (<Suspense fallback={<Loader />}><SignIn /></Suspense>),
    	children: [
      		{
        		path: '/',
        		element: <Suspense fallback={<Loader />}><SignIn /></Suspense>,
      		},
    	],
	},
	{
		element: <Suspense fallback={<Loader />}><ProtectedRoute><Home /></ProtectedRoute></Suspense>,
		children: [
			 {
				path: '',
				element: <Navigate to="/dashboard" />,
			  },
			  {
				path: 'dashboard',
				element: <Suspense fallback={<Loader />}><Home /></Suspense>,
			  },
			  {
				path: 'admin',
				element: <WithSubMenu subMenuItems={[
					{
					  path: '/admin/companies',
					  text: 'Companies',
					  icon: 'fa-solid fa-building',
					},
					{
					  path: '/admin/files',
					  text: 'Files',
					  icon: 'fa-solid fa-file-arrow-up',
					},
				  ]}
				  />,
				  children: [
					{
					  path: '',
					  element: <Suspense fallback={<Loader />}><AdminIndexPage /></Suspense>,
					},
					{
					  path: 'companies',
					  element: <Suspense fallback={<Loader />}><CompaniesIndexPage /></Suspense>,
					},
					{
					  path: 'files',
					  element: <Suspense fallback={<Loader />}><FilesIndexPage /></Suspense>,
					},
				  ],
			  },
		]	
	}

];

export default routes;