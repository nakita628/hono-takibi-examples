import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAndroidenterpriseKey() {
  return ['androidenterprise'] as const
}

export function getGetAndroidenterpriseV1EnterprisesKey(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>,
) {
  return ['androidenterprise', '/androidenterprise/v1/enterprises', args] as const
}

export function useGetAndroidenterpriseV1Enterprises<TError = unknown>(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.androidenterprise.v1.enterprises.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1Enterprises<TError = unknown>(
  args: InferRequestType<typeof client.androidenterprise.v1.enterprises.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.androidenterprise.v1.enterprises.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/acknowledgeNotificationSet',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      typeof client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetKey()
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
            typeof client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises.acknowledgeNotificationSet.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesCompleteSignupKey() {
  return ['androidenterprise', '/androidenterprise/v1/enterprises/completeSignup', 'POST'] as const
}

export function usePostAndroidenterpriseV1EnterprisesCompleteSignup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesCompleteSignupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.androidenterprise.v1.enterprises.completeSignup.$post>
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises.completeSignup.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnrollKey() {
  return ['androidenterprise', '/androidenterprise/v1/enterprises/enroll', 'POST'] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnroll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.enroll.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.androidenterprise.v1.enterprises.enroll.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesEnrollKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.androidenterprise.v1.enterprises.enroll.$post> },
      ) => parseResponse(client.androidenterprise.v1.enterprises.enroll.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesPullNotificationSetKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/pullNotificationSet',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesPullNotificationSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesPullNotificationSetKey()
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
            typeof client.androidenterprise.v1.enterprises.pullNotificationSet.$post
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises.pullNotificationSet.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesSignupUrlKey() {
  return ['androidenterprise', '/androidenterprise/v1/enterprises/signupUrl', 'POST'] as const
}

export function usePostAndroidenterpriseV1EnterprisesSignupUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.androidenterprise.v1.enterprises.signupUrl.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.androidenterprise.v1.enterprises.signupUrl.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesSignupUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.androidenterprise.v1.enterprises.signupUrl.$post>
        },
      ) =>
        parseResponse(client.androidenterprise.v1.enterprises.signupUrl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdKey(
  args: InferRequestType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>,
) {
  return ['androidenterprise', '/androidenterprise/v1/enterprises/:enterpriseId', args] as const
}

export function useGetAndroidenterpriseV1EnterprisesEnterpriseId<TError = unknown>(
  args: InferRequestType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseId<TError = unknown>(
  args: InferRequestType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdAccountKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/account',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['account']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAndroidenterpriseV1EnterprisesEnterpriseIdAccountKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['account']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].account.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/createEnrollmentToken',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createEnrollmentToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createEnrollmentToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].createEnrollmentToken.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/createWebToken',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createWebToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['createWebToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].createWebToken.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicenses<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicenses<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
            ':groupLicenseId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
            ':groupLicenseId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
            ':groupLicenseId'
          ].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['groupLicenses'][':groupLicenseId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].groupLicenses[
            ':groupLicenseId'
          ].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdProducts<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdProducts<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchema<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].appRestrictionsSchema.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchema<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['appRestrictionsSchema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].appRestrictionsSchema.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/approve',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApprove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['approve']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].approve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/generateApprovalUrl',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['generateApprovalUrl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['generateApprovalUrl']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].generateApprovalUrl.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].managedConfigurationsSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['managedConfigurationsSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].managedConfigurationsSettings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/unapprove',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapprove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['unapprove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['products'][':productId']['unapprove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].products[
            ':productId'
          ].unapprove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/sendTestPushNotification',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['sendTestPushNotification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['sendTestPushNotification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].sendTestPushNotification.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccount<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccount.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccount.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeys<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeys<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccountKeys',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccountKeys/:keyId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys'][':keyId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['serviceAccountKeys'][':keyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].serviceAccountKeys[
            ':keyId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayout<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayout<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayout<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPages<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClusters<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].clusters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClusters<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].clusters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClusters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].clusters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].clusters[':clusterId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].clusters[':clusterId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters/:clusterId',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].clusters[':clusterId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters/:clusterId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['storeLayout']['pages'][':pageId']['clusters'][':clusterId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].storeLayout.pages[
            ':pageId'
          ].clusters[':clusterId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/unenroll',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdUnenroll<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['unenroll']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['unenroll']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].unenroll.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/authenticationToken',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['authenticationToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['authenticationToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].authenticationToken.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSet<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].availableProductSet.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSet<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].availableProductSet.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/availableProductSet',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['availableProductSet']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].availableProductSet.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/deviceAccess',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['deviceAccess']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['deviceAccess']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].deviceAccess.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevices<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevices<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/forceReportUpload',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['forceReportUpload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['forceReportUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].forceReportUpload.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstalls<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].installs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstalls<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].installs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].installs[':installId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].installs[':installId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs/:installId',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].installs[':installId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs/:installId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['installs'][':installId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].installs[':installId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDevice<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].managedConfigurationsForDevice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDevice<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].managedConfigurationsForDevice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice/:managedConfigurationForDeviceId',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice/:managedConfigurationForDeviceId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['managedConfigurationsForDevice'][':managedConfigurationForDeviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].managedConfigurationsForDevice[':managedConfigurationForDeviceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdState<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].state.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdState<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].state.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/state',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['devices'][':deviceId']['state']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].devices[
            ':deviceId'
          ].state.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
            ':entitlementId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
            ':entitlementId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements/:entitlementId',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
            ':entitlementId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements/:entitlementId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['entitlements'][':entitlementId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[':userId'].entitlements[
            ':entitlementId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUser<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].managedConfigurationsForUser.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUser<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].managedConfigurationsForUser.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].managedConfigurationsForUser[':managedConfigurationForUserId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].managedConfigurationsForUser[':managedConfigurationForUserId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser/:managedConfigurationForUserId',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].managedConfigurationsForUser[':managedConfigurationForUserId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser/:managedConfigurationForUserId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['users'][':userId']['managedConfigurationsForUser'][':managedConfigurationForUserId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].users[
            ':userId'
          ].managedConfigurationsForUser[':managedConfigurationForUserId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdWebApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].webApps.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdWebApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].webApps.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps',
    'POST',
  ] as const
}

export function usePostAndroidenterpriseV1EnterprisesEnterpriseIdWebApps<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].webApps.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdKey(
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

export function useGetAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps/:webAppId',
    'PUT',
  ] as const
}

export function usePutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdKey() {
  return [
    'androidenterprise',
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps/:webAppId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdKey()
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
            (typeof client.androidenterprise.v1.enterprises)[':enterpriseId']['webApps'][':webAppId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidenterprise.v1.enterprises[':enterpriseId'].webApps[':webAppId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidenterpriseV1PermissionsPermissionIdKey(
  args: InferRequestType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>,
) {
  return ['androidenterprise', '/androidenterprise/v1/permissions/:permissionId', args] as const
}

export function useGetAndroidenterpriseV1PermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1PermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.permissions[':permissionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidenterpriseV1PermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAndroidenterpriseV1PermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.androidenterprise.v1.permissions)[':permissionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.androidenterprise.v1.permissions[':permissionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
