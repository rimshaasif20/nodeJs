"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// export const isAuthenticated = () => {
//   const userLoggedIn = localStorage.getItem('userAuthenticated');
//   return userLoggedIn === 'true';
// };

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const user = JSON.parse(localStorage.getItem('user'));

        useEffect(() => {
            if (!user) {
                router.replace('/signin');
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
