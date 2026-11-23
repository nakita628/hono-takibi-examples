type ThreadPoolInfo = {
  availableCompletionThreads?: number | undefined
  availableWorkerThreads?: number | undefined
  maxCompletionThreads?: number | undefined
  maxWorkerThreads?: number | undefined
  minCompletionThreads?: number | undefined
  minWorkerThreads?: number | undefined
  occupiedCompletionThreads?: number | undefined
  occupiedWorkerThreads?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/utility/v1/health/heartbeat': {
      $get: { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/utility/v1/health/threadinfo': {
      $get: { input: {}; output: ThreadPoolInfo; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
