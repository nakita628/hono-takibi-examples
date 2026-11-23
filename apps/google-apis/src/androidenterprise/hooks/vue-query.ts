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

export function getAndroidenterpriseKey() {
  return ['androidenterprise'] as const
}

export function getAndroidenterpriseV1EnterprisesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>>,
) {
  return ['androidenterprise', '/androidenterprise/v1/enterprises', toValue(args)] as const
}

export function getAndroidenterpriseV1EnterprisesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidenterpriseV1EnterprisesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1Enterprises<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesQueryKey>
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
          Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAndroidenterpriseV1EnterprisesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/acknowledgeNotificationSet',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      typeof client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSet<
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
                    typeof client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesCompleteSignupMutationKey() {
  return ['androidenterprise', '/androidenterprise/v1/enterprises/completeSignup', 'POST'] as const
}

export function getPostAndroidenterpriseV1EnterprisesCompleteSignupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesCompleteSignupMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises.completeSignup.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesCompleteSignup<
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
                  ReturnType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>,
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
  const mutationDefaults = getPostAndroidenterpriseV1EnterprisesCompleteSignupMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesEnrollMutationKey() {
  return ['androidenterprise', '/androidenterprise/v1/enterprises/enroll', 'POST'] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnrollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.enroll.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.androidenterprise.v1.enterprises.enroll.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesEnrollMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.androidenterprise.v1.enterprises.enroll.$post>,
    ) {
      return parseResponse(client.androidenterprise.v1.enterprises.enroll.$post(args, options))
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnroll<
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
                Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.enroll.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.androidenterprise.v1.enterprises.enroll.$post>,
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
  const mutationDefaults = getPostAndroidenterpriseV1EnterprisesEnrollMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesPullNotificationSetMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/pullNotificationSet',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesPullNotificationSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesPullNotificationSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises.pullNotificationSet.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesPullNotificationSet<
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
                    typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post
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
  const mutationDefaults = getPostAndroidenterpriseV1EnterprisesPullNotificationSetMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesSignupUrlMutationKey() {
  return ['androidenterprise', '/androidenterprise/v1/enterprises/signupUrl', 'POST'] as const
}

export function getPostAndroidenterpriseV1EnterprisesSignupUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.signupUrl.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.androidenterprise.v1.enterprises.signupUrl.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesSignupUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.androidenterprise.v1.enterprises.signupUrl.$post>,
    ) {
      return parseResponse(client.androidenterprise.v1.enterprises.signupUrl.$post(args, options))
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesSignupUrl<
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
                Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.signupUrl.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.androidenterprise.v1.enterprises.signupUrl.$post>,
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
  const mutationDefaults = getPostAndroidenterpriseV1EnterprisesSignupUrlMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidenterpriseV1EnterprisesEnterpriseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAndroidenterpriseV1EnterprisesEnterpriseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdAccountMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/account',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['account']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['account']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAndroidenterpriseV1EnterprisesEnterpriseIdAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['account']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].account.$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdAccount<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['account']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['account']['$put']
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
  const mutationDefaults = getPutAndroidenterpriseV1EnterprisesEnterpriseIdAccountMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/createEnrollmentToken',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createEnrollmentToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createEnrollmentToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createEnrollmentToken']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].createEnrollmentToken.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentToken<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createEnrollmentToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createEnrollmentToken']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/createWebToken',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createWebToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createWebToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createWebToken']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].createWebToken.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebToken<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createWebToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createWebToken']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/groupLicenses',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/groupLicenses/:groupLicenseId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
          ':groupLicenseId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
            ':groupLicenseId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/groupLicenses/:groupLicenseId/users',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
          ':groupLicenseId'
        ].users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
            ':groupLicenseId'
          ].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[':productId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/appRestrictionsSchema',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[
          ':productId'
        ].appRestrictionsSchema.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].appRestrictionsSchema.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/approve',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['approve']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['approve']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[
          ':productId'
        ].approve.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApprove<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['approve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['approve']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/generateApprovalUrl',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['generateApprovalUrl']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['generateApprovalUrl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['generateApprovalUrl']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[
          ':productId'
        ].generateApprovalUrl.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrl<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['generateApprovalUrl']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['generateApprovalUrl']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/managedConfigurationsSettings',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[
          ':productId'
        ].managedConfigurationsSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].managedConfigurationsSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/permissions',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[
          ':productId'
        ].permissions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/unapprove',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['unapprove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['unapprove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['unapprove']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[
          ':productId'
        ].unapprove.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapprove<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['unapprove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['unapprove']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/sendTestPushNotification',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['sendTestPushNotification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['sendTestPushNotification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['sendTestPushNotification']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].sendTestPushNotification.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotification<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['sendTestPushNotification']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['sendTestPushNotification']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccount',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccount.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccount.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccountKeys',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccountKeys',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeys<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccountKeys/:keyId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys'][':keyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys'][':keyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys'][':keyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys[
          ':keyId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys'][':keyId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys'][':keyId']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayout<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPages<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[':pageId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[':pageId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
          ':pageId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
          ':pageId'
        ].clusters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].clusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
          ':pageId'
        ].clusters.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClusters<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters/:clusterId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
          ':pageId'
        ].clusters[':clusterId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].clusters[':clusterId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters/:clusterId',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
          ':pageId'
        ].clusters[':clusterId'].$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters/:clusterId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
          ':pageId'
        ].clusters[':clusterId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/unenroll',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['unenroll']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['unenroll']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['unenroll']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].unenroll.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdUnenroll<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['unenroll']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['unenroll']['$post']
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
  const mutationDefaults = getPostAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdUsers<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$post']
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
  const mutationDefaults = getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/authenticationToken',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['authenticationToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['authenticationToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['authenticationToken']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].authenticationToken.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationToken<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['authenticationToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['authenticationToken']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/availableProductSet',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].availableProductSet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].availableProductSet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/availableProductSet',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].availableProductSet.$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSet<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/deviceAccess',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['deviceAccess']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['deviceAccess']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['deviceAccess']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].deviceAccess.$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccess<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['deviceAccess']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['deviceAccess']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdMutationOptions<
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

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/forceReportUpload',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['forceReportUpload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['forceReportUpload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['forceReportUpload']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].forceReportUpload.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUpload<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['forceReportUpload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['forceReportUpload']['$post']
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
  const mutationDefaults =
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].installs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].installs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs/:installId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].installs[':installId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].installs[':installId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs/:installId',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].installs[':installId'].$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs/:installId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].installs[':installId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].managedConfigurationsForDevice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].managedConfigurationsForDevice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice/:managedConfigurationForDeviceId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice/:managedConfigurationForDeviceId',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice/:managedConfigurationForDeviceId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/state',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].state.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/state',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].state.$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdState<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements/:entitlementId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
          ':entitlementId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
            ':entitlementId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements/:entitlementId',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
          ':entitlementId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements/:entitlementId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
          ':entitlementId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].managedConfigurationsForUser.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].managedConfigurationsForUser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser/:managedConfigurationForUserId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].managedConfigurationsForUser[':managedConfigurationForUserId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].managedConfigurationsForUser[':managedConfigurationForUserId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser/:managedConfigurationForUserId',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].managedConfigurationsForUser[':managedConfigurationForUserId'].$put(args, options),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser/:managedConfigurationForUserId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].managedConfigurationsForUser[':managedConfigurationForUserId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].webApps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdWebApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].webApps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps',
    'POST',
  ] as const
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$post']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].webApps.$post(args, options),
      )
    },
  })
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdWebApps<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$post']
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
  const mutationDefaults = getPostAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
    >
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps/:webAppId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps/:webAppId',
    'PUT',
  ] as const
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$put']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$put']
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
  const mutationDefaults =
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationOptions<
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

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps/:webAppId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<
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
                    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$delete']
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
  const mutationDefaults =
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationOptions<
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

export function getAndroidenterpriseV1PermissionsPermissionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/permissions/:permissionId',
    toValue(args),
  ] as const
}

export function getAndroidenterpriseV1PermissionsPermissionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidenterpriseV1PermissionsPermissionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidenterprise.v1.permissions[':permissionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidenterpriseV1PermissionsPermissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidenterpriseV1PermissionsPermissionIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidenterpriseV1PermissionsPermissionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAndroidenterpriseV1PermissionsPermissionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.androidenterprise.v1.permissions[':permissionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
