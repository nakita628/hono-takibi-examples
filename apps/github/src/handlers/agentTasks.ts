import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgentsReposOwnerRepoTasksRoute,
  getAgentsReposOwnerRepoTasksTaskIdRoute,
  getAgentsTasksRoute,
  getAgentsTasksTaskIdRoute,
  postAgentsReposOwnerRepoTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentTasksHandler = app
  .openapi(getAgentsReposOwnerRepoTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsReposOwnerRepoTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
