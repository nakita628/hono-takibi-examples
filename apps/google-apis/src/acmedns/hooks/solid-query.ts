import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AcmeChallengeSetsRootDomainQueryKey(
  args: InferRequestType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>,
) {
  return ['v1', '/v1/acmeChallengeSets/:rootDomain', args] as const
}

export function getV1AcmeChallengeSetsRootDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AcmeChallengeSetsRootDomainQueryKey>
  >({
    queryKey: getV1AcmeChallengeSetsRootDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.acmeChallengeSets[':rootDomain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AcmeChallengeSetsRootDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AcmeChallengeSetsRootDomainQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AcmeChallengeSetsRootDomainQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1AcmeChallengeSetsRootDomainRotateChallengesMutationKey() {
  return ['v1', '/v1/acmeChallengeSets/:rootDomain:rotateChallenges', 'POST'] as const
}

export function getPostV1AcmeChallengeSetsRootDomainRotateChallengesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.acmeChallengeSets)[':rootDomain:rotateChallenges']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.acmeChallengeSets)[':rootDomain:rotateChallenges']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AcmeChallengeSetsRootDomainRotateChallengesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.acmeChallengeSets)[':rootDomain:rotateChallenges']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.acmeChallengeSets[':rootDomain:rotateChallenges'].$post(args, options),
      )
    },
  })
}

export function createPostV1AcmeChallengeSetsRootDomainRotateChallenges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.acmeChallengeSets)[':rootDomain:rotateChallenges']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.acmeChallengeSets)[':rootDomain:rotateChallenges']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AcmeChallengeSetsRootDomainRotateChallengesMutationOptions<
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
