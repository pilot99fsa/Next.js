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
import ThreadCard from './ThreadCard';

const ThreadCardList = () => {
  return (
    /**
     * grid lg:grid-cols-3について
     * 画面幅1024px以上の時にmainタグの子要素であるCardを横3列に並べる
     */
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
    </div>
  );
};

export default ThreadCardList;
