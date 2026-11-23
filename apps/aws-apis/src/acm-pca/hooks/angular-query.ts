import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetACMPrivateCACreateCertificateAuthorityMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCACreateCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCACreateCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCACreateCertificateAuthority<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCACreateCertificateAuthorityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport',
    '/#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReport<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCACreatePermissionMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.CreatePermission',
    '/#X-Amz-Target=ACMPrivateCA.CreatePermission',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCACreatePermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.CreatePermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCACreatePermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.CreatePermission']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.CreatePermission'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCACreatePermission<
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
                ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.CreatePermission']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.CreatePermission']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCACreatePermissionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCADeleteCertificateAuthorityMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCADeleteCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCADeleteCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCADeleteCertificateAuthority<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCADeleteCertificateAuthorityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCADeletePermissionMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DeletePermission',
    '/#X-Amz-Target=ACMPrivateCA.DeletePermission',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCADeletePermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCADeletePermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePermission']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.DeletePermission'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCADeletePermission<
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
                ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePermission']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePermission']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCADeletePermissionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCADeletePolicyMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DeletePolicy',
    '/#X-Amz-Target=ACMPrivateCA.DeletePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCADeletePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCADeletePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=ACMPrivateCA.DeletePolicy'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetACMPrivateCADeletePolicy<
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
                ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.DeletePolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCADeletePolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCADescribeCertificateAuthority<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport',
    '/#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReport<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAGetCertificateMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.GetCertificate',
    '/#X-Amz-Target=ACMPrivateCA.GetCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAGetCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAGetCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificate']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=ACMPrivateCA.GetCertificate'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAGetCertificate<
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
                ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAGetCertificateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate',
    '/#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAGetCertificateAuthorityCertificate<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCsrMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr',
    '/#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCsrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCsrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAGetCertificateAuthorityCsr<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAGetCertificateAuthorityCsrMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAGetPolicyMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.GetPolicy',
    '/#X-Amz-Target=ACMPrivateCA.GetPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAGetPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAGetPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetPolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=ACMPrivateCA.GetPolicy'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAGetPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.GetPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAGetPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate',
    '/#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAImportCertificateAuthorityCertificate<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAIssueCertificateMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.IssueCertificate',
    '/#X-Amz-Target=ACMPrivateCA.IssueCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAIssueCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.IssueCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAIssueCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.IssueCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.IssueCertificate'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAIssueCertificate<
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
                ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.IssueCertificate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.IssueCertificate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAIssueCertificateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAListCertificateAuthoritiesMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities',
    '/#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAListCertificateAuthoritiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAListCertificateAuthoritiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAListCertificateAuthorities<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAListCertificateAuthoritiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAListPermissionsMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.ListPermissions',
    '/#X-Amz-Target=ACMPrivateCA.ListPermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAListPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAListPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.ListPermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.ListPermissions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAListPermissions<
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
                ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListPermissions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListPermissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAListPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAListTagsMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.ListTags',
    '/#X-Amz-Target=ACMPrivateCA.ListTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAListTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAListTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=ACMPrivateCA.ListTags'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAListTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.ListTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAListTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAPutPolicyMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.PutPolicy',
    '/#X-Amz-Target=ACMPrivateCA.PutPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAPutPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.PutPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.PutPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAPutPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.PutPolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=ACMPrivateCA.PutPolicy'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAPutPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.PutPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.PutPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAPutPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCARestoreCertificateAuthorityMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCARestoreCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCARestoreCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCARestoreCertificateAuthority<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetACMPrivateCARestoreCertificateAuthorityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCARevokeCertificateMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.RevokeCertificate',
    '/#X-Amz-Target=ACMPrivateCA.RevokeCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCARevokeCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.RevokeCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCARevokeCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.RevokeCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.RevokeCertificate'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCARevokeCertificate<
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
                ReturnType<(typeof client)['#X-Amz-Target=ACMPrivateCA.RevokeCertificate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ACMPrivateCA.RevokeCertificate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCARevokeCertificateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCATagCertificateAuthorityMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCATagCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCATagCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCATagCertificateAuthority<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCATagCertificateAuthorityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAUntagCertificateAuthorityMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAUntagCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAUntagCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAUntagCertificateAuthority<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAUntagCertificateAuthorityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetACMPrivateCAUpdateCertificateAuthorityMutationKey() {
  return [
    '#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority',
    '/#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority',
    'POST',
  ] as const
}

export function getPostXAmzTargetACMPrivateCAUpdateCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetACMPrivateCAUpdateCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetACMPrivateCAUpdateCertificateAuthority<
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
                  (typeof client)['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetACMPrivateCAUpdateCertificateAuthorityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
