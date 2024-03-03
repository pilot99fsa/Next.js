import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    /**
     * grid lg:grid-cols-3について
     * 画面幅1024px以上の時にmainタグの子要素であるCardを横3列に並べる
     */
    <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
          delectus, dolore nulla officiis recusandae odit quae natus nihil,
          consectetur consequuntur vel totam quam maiores. Eaque itaque magnam
          consequuntur placeat totam?
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={'/thread-posts/1'}>Read More</Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
          delectus, dolore nulla officiis recusandae odit quae natus nihil,
          consectetur consequuntur vel totam quam maiores. Eaque itaque magnam
          consequuntur placeat totam?
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={'/thread-posts/1'}>Read More</Link>
        </CardFooter>
      </Card>
    </main>
  );
}
