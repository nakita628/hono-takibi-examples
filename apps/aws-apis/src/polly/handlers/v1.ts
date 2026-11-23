import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1LexiconsLexiconNameRoute,
  getV1LexiconsLexiconNameRoute,
  getV1LexiconsRoute,
  getV1SynthesisTasksRoute,
  getV1SynthesisTasksTaskIdRoute,
  getV1VoicesRoute,
  postV1SpeechRoute,
  postV1SynthesisTasksRoute,
  putV1LexiconsLexiconNameRoute,
} from '../routes'

export const deleteV1LexiconsLexiconNameRouteHandler: RouteHandler<
  typeof deleteV1LexiconsLexiconNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LexiconsLexiconNameRouteHandler: RouteHandler<
  typeof getV1LexiconsLexiconNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1LexiconsLexiconNameRouteHandler: RouteHandler<
  typeof putV1LexiconsLexiconNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VoicesRouteHandler: RouteHandler<typeof getV1VoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SynthesisTasksTaskIdRouteHandler: RouteHandler<
  typeof getV1SynthesisTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LexiconsRouteHandler: RouteHandler<typeof getV1LexiconsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SynthesisTasksRouteHandler: RouteHandler<
  typeof getV1SynthesisTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SynthesisTasksRouteHandler: RouteHandler<
  typeof postV1SynthesisTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SpeechRouteHandler: RouteHandler<typeof postV1SpeechRoute> = async (c) => {
  throw new Error('Not implemented')
}
