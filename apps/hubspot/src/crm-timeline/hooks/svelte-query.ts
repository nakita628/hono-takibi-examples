import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIntegratorsKey() {
  return ['integrators'] as const
}

export function getPostIntegratorsTimeline202609EventsMutationKey() {
  return ['integrators', '/integrators/timeline/2026-09/events', 'POST'] as const
}

export function getPostIntegratorsTimeline202609EventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrators.timeline)['2026-09']['events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.integrators.timeline)['2026-09']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegratorsTimeline202609EventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.integrators.timeline)['2026-09']['events']['$post']>,
    ) {
      return parseResponse(client.integrators.timeline['2026-09'].events.$post(args, options))
    },
  })
}

export function createPostIntegratorsTimeline202609Events<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrators.timeline)['2026-09']['events']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.integrators.timeline)['2026-09']['events']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIntegratorsTimeline202609EventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIntegratorsTimeline202609EventsBatchMutationKey() {
  return ['integrators', '/integrators/timeline/2026-09/events/batch', 'POST'] as const
}

export function getPostIntegratorsTimeline202609EventsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.integrators.timeline)['2026-09']['events']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegratorsTimeline202609EventsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integrators.timeline)['2026-09']['events']['batch']['$post']
      >,
    ) {
      return parseResponse(client.integrators.timeline['2026-09'].events.batch.$post(args, options))
    },
  })
}

export function createPostIntegratorsTimeline202609EventsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrators.timeline)['2026-09']['events']['batch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.integrators.timeline)['2026-09']['events']['batch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIntegratorsTimeline202609EventsBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIntegratorsTimeline202609TypesProjectsMutationKey() {
  return ['integrators', '/integrators/timeline/2026-09/types/projects', 'POST'] as const
}

export function getPostIntegratorsTimeline202609TypesProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.integrators.timeline)['2026-09']['types']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegratorsTimeline202609TypesProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integrators.timeline)['2026-09']['types']['projects']['$post']
      >,
    ) {
      return parseResponse(
        client.integrators.timeline['2026-09'].types.projects.$post(args, options),
      )
    },
  })
}

export function createPostIntegratorsTimeline202609TypesProjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.integrators.timeline)['2026-09']['types']['projects']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIntegratorsTimeline202609TypesProjectsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
