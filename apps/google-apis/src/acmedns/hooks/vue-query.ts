import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AcmeChallengeSetsRootDomainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>
  >,
) {
  return ['v1', '/v1/acmeChallengeSets/:rootDomain', toValue(args)] as const
}

export function getV1AcmeChallengeSetsRootDomainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AcmeChallengeSetsRootDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.acmeChallengeSets[':rootDomain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AcmeChallengeSetsRootDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.acmeChallengeSets)[':rootDomain']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AcmeChallengeSetsRootDomainQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AcmeChallengeSetsRootDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.acmeChallengeSets[':rootDomain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AcmeChallengeSetsRootDomainRotateChallenges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AcmeChallengeSetsRootDomainRotateChallengesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
