import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFlowRunsFlowRunIdRoute,
  getFlowRunsFlowRunIdRoute,
  getFlowRunsFlowRunIdStepsRoute,
  getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptRoute,
  getFlowRunsFlowRunIdStepsStepSeqRoute,
  getFlowRunsRoute,
  postFlowRunsRoute,
} from '../routes'

export const getFlowRunsRouteHandler: RouteHandler<typeof getFlowRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFlowRunsRouteHandler: RouteHandler<typeof postFlowRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFlowRunsFlowRunIdRouteHandler: RouteHandler<
  typeof getFlowRunsFlowRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFlowRunsFlowRunIdRouteHandler: RouteHandler<
  typeof deleteFlowRunsFlowRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFlowRunsFlowRunIdStepsRouteHandler: RouteHandler<
  typeof getFlowRunsFlowRunIdStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFlowRunsFlowRunIdStepsStepSeqRouteHandler: RouteHandler<
  typeof getFlowRunsFlowRunIdStepsStepSeqRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptRouteHandler: RouteHandler<
  typeof getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptRoute
> = async (c) => {
  throw new Error('Not implemented')
}
