// shadcnのUIライブラリ
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from 'next/link';
import React from 'react';

const ThreadCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
        delectus, dolore nulla officiis recusandae odit quae natus nihil,
        consectetur consequuntur vel totam quam maiores. Eaque itaque magnam
        consequuntur placeat totam?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={'/thread-posts/1'} className="text-blue-400">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ThreadCard;
