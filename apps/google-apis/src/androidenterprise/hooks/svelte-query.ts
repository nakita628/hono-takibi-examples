import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAndroidenterpriseKey() {
  return ['androidenterprise'] as const
}

export function getAndroidenterpriseV1EnterprisesQueryKey(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>,
) {
  return ['androidenterprise', '/androidenterprise/v1/enterprises', args] as const
}

export function getAndroidenterpriseV1EnterprisesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1Enterprises<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSet<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesCompleteSignup<
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
                ReturnType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>,
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
    const mutationDefaults = getPostAndroidenterpriseV1EnterprisesCompleteSignupMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesEnroll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAndroidenterpriseV1EnterprisesEnrollMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesPullNotificationSet<
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
                ReturnType<typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post>,
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
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesPullNotificationSetMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesSignupUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAndroidenterpriseV1EnterprisesSignupUrlMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdQueryKey(
  args: InferRequestType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>,
) {
  return ['androidenterprise', '/androidenterprise/v1/enterprises/:enterpriseId', args] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdQueryOptions<
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
  args: InferRequestType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAndroidenterpriseV1EnterprisesEnterpriseIdQueryKey>
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdAccount<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAndroidenterpriseV1EnterprisesEnterpriseIdAccountMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/groupLicenses',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicenses<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/groupLicenses/:groupLicenseId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
          ':groupLicenseId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/groupLicenses/:groupLicenseId/users',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
          ':groupLicenseId'
        ].users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsers<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdProducts<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdProductsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/appRestrictionsSchema',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[
          ':productId'
        ].appRestrictionsSchema.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchema<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApprove<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrl<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/managedConfigurationsSettings',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[
          ':productId'
        ].managedConfigurationsSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettings<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/permissions',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].products[
          ':productId'
        ].permissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissions<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapprove<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotification<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccount',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccount<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccountKeys',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeys<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeys<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayout<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayout<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPages<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPages<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[':pageId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryKey
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
          ':pageId'
        ].clusters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClusters<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClusters<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters/:clusterId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
          ':pageId'
        ].clusters[':clusterId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdUnenroll<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsers<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdUsers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/availableProductSet',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].availableProductSet.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSet<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSet<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccess<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevices<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdMutationOptions<
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUpload<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].installs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstalls<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs/:installId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].installs[':installId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].managedConfigurationsForDevice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDevice<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice/:managedConfigurationForDeviceId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/state',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
          ':deviceId'
        ].state.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdState<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdState<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlements<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryKey
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements/:entitlementId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
          ':entitlementId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].managedConfigurationsForUser.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUser<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser/:managedConfigurationForUserId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].users[
          ':userId'
        ].managedConfigurationsForUser[':managedConfigurationForUserId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].webApps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdWebApps<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAndroidenterpriseV1EnterprisesEnterpriseIdWebApps<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsMutationOptions<
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

export function getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryKey(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
  >,
) {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps/:webAppId',
    args,
  ] as const
}

export function getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationOptions<
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

export function createDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdMutationOptions<
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

export function getAndroidenterpriseV1PermissionsPermissionIdQueryKey(
  args: InferRequestType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>,
) {
  return ['androidenterprise', '/androidenterprise/v1/permissions/:permissionId', args] as const
}

export function getAndroidenterpriseV1PermissionsPermissionIdQueryOptions<
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
  args: InferRequestType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAndroidenterpriseV1PermissionsPermissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.androidenterprise.v1.permissions[':permissionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAndroidenterpriseV1PermissionsPermissionId<
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
  args: () => InferRequestType<
    (typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAndroidenterpriseV1PermissionsPermissionIdQueryKey>
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
      ...getAndroidenterpriseV1PermissionsPermissionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
