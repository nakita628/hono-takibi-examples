import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIntegratorsKey() {
  return ['integrators'] as const
}

export function getPostIntegratorsTimeline202609EventsKey() {
  return ['integrators', '/integrators/timeline/2026-09/events', 'POST'] as const
}

export function usePostIntegratorsTimeline202609Events<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrators.timeline)['2026-09']['events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrators.timeline)['2026-09']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegratorsTimeline202609EventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.integrators.timeline)['2026-09']['events']['$post']>
        },
      ) => parseResponse(client.integrators.timeline['2026-09'].events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntegratorsTimeline202609EventsBatchKey() {
  return ['integrators', '/integrators/timeline/2026-09/events/batch', 'POST'] as const
}

export function usePostIntegratorsTimeline202609EventsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrators.timeline)['2026-09']['events']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrators.timeline)['2026-09']['events']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegratorsTimeline202609EventsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.integrators.timeline)['2026-09']['events']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.integrators.timeline['2026-09'].events.batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostIntegratorsTimeline202609TypesProjectsKey() {
  return ['integrators', '/integrators/timeline/2026-09/types/projects', 'POST'] as const
}

export function usePostIntegratorsTimeline202609TypesProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integrators.timeline)['2026-09']['types']['projects']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrators.timeline)['2026-09']['types']['projects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegratorsTimeline202609TypesProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.integrators.timeline)['2026-09']['types']['projects']['$post']
          >
        },
      ) =>
        parseResponse(
          client.integrators.timeline['2026-09'].types.projects.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
