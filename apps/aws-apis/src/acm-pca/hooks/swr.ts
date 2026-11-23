import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetACMPrivateCACreateCertificateAuthorityKey() {
  return ['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority'] as const
}

export function getXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportKey() {
  return ['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport'] as const
}

export function getXAmzTargetACMPrivateCACreatePermissionKey() {
  return ['#X-Amz-Target=ACMPrivateCA.CreatePermission'] as const
}

export function getXAmzTargetACMPrivateCADeleteCertificateAuthorityKey() {
  return ['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority'] as const
}

export function getXAmzTargetACMPrivateCADeletePermissionKey() {
  return ['#X-Amz-Target=ACMPrivateCA.DeletePermission'] as const
}

export function getXAmzTargetACMPrivateCADeletePolicyKey() {
  return ['#X-Amz-Target=ACMPrivateCA.DeletePolicy'] as const
}

export function getXAmzTargetACMPrivateCADescribeCertificateAuthorityKey() {
  return ['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority'] as const
}

export function getXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportKey() {
  return ['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport'] as const
}

export function getXAmzTargetACMPrivateCAGetCertificateKey() {
  return ['#X-Amz-Target=ACMPrivateCA.GetCertificate'] as const
}

export function getXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateKey() {
  return ['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate'] as const
}

export function getXAmzTargetACMPrivateCAGetCertificateAuthorityCsrKey() {
  return ['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr'] as const
}

export function getXAmzTargetACMPrivateCAGetPolicyKey() {
  return ['#X-Amz-Target=ACMPrivateCA.GetPolicy'] as const
}

export function getXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateKey() {
  return ['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate'] as const
}

export function getXAmzTargetACMPrivateCAIssueCertificateKey() {
  return ['#X-Amz-Target=ACMPrivateCA.IssueCertificate'] as const
}

export function getXAmzTargetACMPrivateCAListCertificateAuthoritiesKey() {
  return ['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities'] as const
}

export function getXAmzTargetACMPrivateCAListPermissionsKey() {
  return ['#X-Amz-Target=ACMPrivateCA.ListPermissions'] as const
}

export function getXAmzTargetACMPrivateCAListTagsKey() {
  return ['#X-Amz-Target=ACMPrivateCA.ListTags'] as const
}

export function getXAmzTargetACMPrivateCAPutPolicyKey() {
  return ['#X-Amz-Target=ACMPrivateCA.PutPolicy'] as const
}

export function getXAmzTargetACMPrivateCARestoreCertificateAuthorityKey() {
  return ['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority'] as const
}

export function getXAmzTargetACMPrivateCARevokeCertificateKey() {
  return ['#X-Amz-Target=ACMPrivateCA.RevokeCertificate'] as const
}

export function getXAmzTargetACMPrivateCATagCertificateAuthorityKey() {
  return ['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority'] as const
}

export function getXAmzTargetACMPrivateCAUntagCertificateAuthorityKey() {
  return ['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority'] as const
}

export function getXAmzTargetACMPrivateCAUpdateCertificateAuthorityKey() {
  return ['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority'] as const
}

export function getPostXAmzTargetACMPrivateCACreateCertificateAuthorityKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCACreateCertificateAuthority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCACreateCertificateAuthorityKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport',
    '/#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCACreatePermissionKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.CreatePermission',
    '/#X-Amz-Target=ACMPrivateCA.CreatePermission',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCACreatePermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.CreatePermission']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.CreatePermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCACreatePermissionKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.CreatePermission']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.CreatePermission'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCADeleteCertificateAuthorityKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCADeleteCertificateAuthority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCADeleteCertificateAuthorityKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCADeletePermissionKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DeletePermission',
    '/#X-Amz-Target=ACMPrivateCA.DeletePermission',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCADeletePermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePermission']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCADeletePermissionKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePermission']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.DeletePermission'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCADeletePolicyKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DeletePolicy',
    '/#X-Amz-Target=ACMPrivateCA.DeletePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCADeletePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCADeletePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePolicy']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=ACMPrivateCA.DeletePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCADescribeCertificateAuthority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport',
    '/#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAGetCertificateKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.GetCertificate',
    '/#X-Amz-Target=ACMPrivateCA.GetCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAGetCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAGetCertificateKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.GetCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate',
    '/#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAGetCertificateAuthorityCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCsrKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr',
    '/#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAGetCertificateAuthorityCsr<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCsrKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAGetPolicyKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.GetPolicy',
    '/#X-Amz-Target=ACMPrivateCA.GetPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAGetPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAGetPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetPolicy']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=ACMPrivateCA.GetPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate',
    '/#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAImportCertificateAuthorityCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAIssueCertificateKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.IssueCertificate',
    '/#X-Amz-Target=ACMPrivateCA.IssueCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAIssueCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.IssueCertificate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.IssueCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAIssueCertificateKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.IssueCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.IssueCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAListCertificateAuthoritiesKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities',
    '/#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAListCertificateAuthorities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAListCertificateAuthoritiesKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAListPermissionsKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.ListPermissions',
    '/#X-Amz-Target=ACMPrivateCA.ListPermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAListPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListPermissions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListPermissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAListPermissionsKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.ListPermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.ListPermissions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAListTagsKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.ListTags',
    '/#X-Amz-Target=ACMPrivateCA.ListTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAListTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAListTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListTags']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=ACMPrivateCA.ListTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAPutPolicyKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.PutPolicy',
    '/#X-Amz-Target=ACMPrivateCA.PutPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAPutPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.PutPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.PutPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAPutPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.PutPolicy']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=ACMPrivateCA.PutPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCARestoreCertificateAuthorityKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCARestoreCertificateAuthority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCARestoreCertificateAuthorityKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCARevokeCertificateKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.RevokeCertificate',
    '/#X-Amz-Target=ACMPrivateCA.RevokeCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCARevokeCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.RevokeCertificate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.RevokeCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCARevokeCertificateKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.RevokeCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.RevokeCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCATagCertificateAuthorityKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCATagCertificateAuthority<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCATagCertificateAuthorityKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAUntagCertificateAuthorityKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAUntagCertificateAuthority<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAUntagCertificateAuthorityKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetACMPrivateCAUpdateCertificateAuthorityKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority',
    'POST',
  ] as const
}

export function usePostXAmzTargetACMPrivateCAUpdateCertificateAuthority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetACMPrivateCAUpdateCertificateAuthorityKey()
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
            (typeof client)['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
