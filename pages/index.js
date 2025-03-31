import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Database, Bot, Globe } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <h1 className="text-3xl font-bold">OmniVision Analytics</h1>
        <nav>
          <Button variant="outline">Request Demo</Button>
        </nav>
      </header>

      <main className="py-20 px-6 md:px-12 lg:px-24">
        <section className="text-center space-y-4 mb-20">
          <h2 className="text-4xl font-bold">AI-Driven Data Insights at Scale</h2>
          <p className="text-xl">Extract, refine, and monetize public web data with precision and efficiency.</p>
          <Button className="mt-4">Get Started</Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <TrendingUp className="text-blue-500" />
              <CardTitle>Advanced Web Crawling</CardTitle>
            </CardHeader>
            <CardContent>
              AI-powered autonomous crawlers increasing data capture relevance by 35% across industries.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="text-green-500" />
              <CardTitle>End-to-End ETL Pipelines</CardTitle>
            </CardHeader>
            <CardContent>
              Transform raw data into structured, analytics-ready datasets with 42% greater efficiency.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="text-purple-500" />
              <CardTitle>Validated Performance</CardTitle>
            </CardHeader>
            <CardContent>
              Reliable AI systems rigorously tested, ensuring 33% uplift in accuracy and precision.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="text-orange-500" />
              <CardTitle>Data Monetization</CardTitle>
            </CardHeader>
            <CardContent>
              Automate data categorization for resale, unlocking new revenue streams by up to 45%.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Bot className="text-red-500" />
              <CardTitle>Automated Workflows</CardTitle>
            </CardHeader>
            <CardContent>
              Collaborate effortlessly with automated data processes, cutting manual effort by 40%.
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-6 text-center bg-gray-100">
        <p>© {new Date().getFullYear()} OmniVision Analytics. All rights reserved.</p>
      </footer>
    </div>
  );
}
