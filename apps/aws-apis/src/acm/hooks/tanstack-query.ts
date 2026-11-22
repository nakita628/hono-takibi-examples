import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetCertificateManagerAddTagsToCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.AddTagsToCertificate'] as const
}

export function getXAmzTargetCertificateManagerDeleteCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.DeleteCertificate'] as const
}

export function getXAmzTargetCertificateManagerDescribeCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.DescribeCertificate'] as const
}

export function getXAmzTargetCertificateManagerExportCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.ExportCertificate'] as const
}

export function getXAmzTargetCertificateManagerGetAccountConfigurationKey() {
  return ['#X-Amz-Target=CertificateManager.GetAccountConfiguration'] as const
}

export function getXAmzTargetCertificateManagerGetCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.GetCertificate'] as const
}

export function getXAmzTargetCertificateManagerImportCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.ImportCertificate'] as const
}

export function getXAmzTargetCertificateManagerListCertificatesKey() {
  return ['#X-Amz-Target=CertificateManager.ListCertificates'] as const
}

export function getXAmzTargetCertificateManagerListTagsForCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.ListTagsForCertificate'] as const
}

export function getXAmzTargetCertificateManagerPutAccountConfigurationKey() {
  return ['#X-Amz-Target=CertificateManager.PutAccountConfiguration'] as const
}

export function getXAmzTargetCertificateManagerRemoveTagsFromCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate'] as const
}

export function getXAmzTargetCertificateManagerRenewCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.RenewCertificate'] as const
}

export function getXAmzTargetCertificateManagerRequestCertificateKey() {
  return ['#X-Amz-Target=CertificateManager.RequestCertificate'] as const
}

export function getXAmzTargetCertificateManagerResendValidationEmailKey() {
  return ['#X-Amz-Target=CertificateManager.ResendValidationEmail'] as const
}

export function getXAmzTargetCertificateManagerUpdateCertificateOptionsKey() {
  return ['#X-Amz-Target=CertificateManager.UpdateCertificateOptions'] as const
}

export function getPostXAmzTargetCertificateManagerAddTagsToCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.AddTagsToCertificate',
    '/#X-Amz-Target=CertificateManager.AddTagsToCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerAddTagsToCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.AddTagsToCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.AddTagsToCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerAddTagsToCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.AddTagsToCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.AddTagsToCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerAddTagsToCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.AddTagsToCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.AddTagsToCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerAddTagsToCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerDeleteCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.DeleteCertificate',
    '/#X-Amz-Target=CertificateManager.DeleteCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerDeleteCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.DeleteCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.DeleteCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerDeleteCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.DeleteCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.DeleteCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerDeleteCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.DeleteCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.DeleteCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerDeleteCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerDescribeCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.DescribeCertificate',
    '/#X-Amz-Target=CertificateManager.DescribeCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerDescribeCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.DescribeCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.DescribeCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerDescribeCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.DescribeCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.DescribeCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerDescribeCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.DescribeCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.DescribeCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerDescribeCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerExportCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.ExportCertificate',
    '/#X-Amz-Target=CertificateManager.ExportCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerExportCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ExportCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.ExportCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerExportCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.ExportCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.ExportCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerExportCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.ExportCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.ExportCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerExportCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerGetAccountConfigurationMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.GetAccountConfiguration',
    '/#X-Amz-Target=CertificateManager.GetAccountConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerGetAccountConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.GetAccountConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.GetAccountConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerGetAccountConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.GetAccountConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.GetAccountConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerGetAccountConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.GetAccountConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.GetAccountConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetCertificateManagerGetAccountConfigurationMutationOptions<
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

export function getPostXAmzTargetCertificateManagerGetCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.GetCertificate',
    '/#X-Amz-Target=CertificateManager.GetCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerGetCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CertificateManager.GetCertificate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CertificateManager.GetCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerGetCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.GetCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.GetCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerGetCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.GetCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.GetCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerGetCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerImportCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.ImportCertificate',
    '/#X-Amz-Target=CertificateManager.ImportCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerImportCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ImportCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.ImportCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerImportCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.ImportCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.ImportCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerImportCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.ImportCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.ImportCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerImportCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerListCertificatesMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.ListCertificates',
    '/#X-Amz-Target=CertificateManager.ListCertificates',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerListCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ListCertificates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CertificateManager.ListCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerListCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.ListCertificates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.ListCertificates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerListCertificates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.ListCertificates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.ListCertificates']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerListCertificatesMutationOptions<
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

export function getPostXAmzTargetCertificateManagerListTagsForCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.ListTagsForCertificate',
    '/#X-Amz-Target=CertificateManager.ListTagsForCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerListTagsForCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ListTagsForCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.ListTagsForCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerListTagsForCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.ListTagsForCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.ListTagsForCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerListTagsForCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.ListTagsForCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.ListTagsForCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerListTagsForCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerPutAccountConfigurationMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.PutAccountConfiguration',
    '/#X-Amz-Target=CertificateManager.PutAccountConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerPutAccountConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.PutAccountConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.PutAccountConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerPutAccountConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.PutAccountConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.PutAccountConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerPutAccountConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.PutAccountConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.PutAccountConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetCertificateManagerPutAccountConfigurationMutationOptions<
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

export function getPostXAmzTargetCertificateManagerRemoveTagsFromCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate',
    '/#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerRemoveTagsFromCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerRemoveTagsFromCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerRemoveTagsFromCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetCertificateManagerRemoveTagsFromCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerRenewCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.RenewCertificate',
    '/#X-Amz-Target=CertificateManager.RenewCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerRenewCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.RenewCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CertificateManager.RenewCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerRenewCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.RenewCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.RenewCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerRenewCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.RenewCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.RenewCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerRenewCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerRequestCertificateMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.RequestCertificate',
    '/#X-Amz-Target=CertificateManager.RequestCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerRequestCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.RequestCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.RequestCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerRequestCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.RequestCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.RequestCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerRequestCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.RequestCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.RequestCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerRequestCertificateMutationOptions<
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

export function getPostXAmzTargetCertificateManagerResendValidationEmailMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.ResendValidationEmail',
    '/#X-Amz-Target=CertificateManager.ResendValidationEmail',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerResendValidationEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.ResendValidationEmail']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.ResendValidationEmail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerResendValidationEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.ResendValidationEmail']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.ResendValidationEmail'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerResendValidationEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.ResendValidationEmail']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.ResendValidationEmail']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCertificateManagerResendValidationEmailMutationOptions<
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

export function getPostXAmzTargetCertificateManagerUpdateCertificateOptionsMutationKey() {
  return [
    '#X-Amz-Target=CertificateManager.UpdateCertificateOptions',
    '/#X-Amz-Target=CertificateManager.UpdateCertificateOptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetCertificateManagerUpdateCertificateOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CertificateManager.UpdateCertificateOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CertificateManager.UpdateCertificateOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCertificateManagerUpdateCertificateOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CertificateManager.UpdateCertificateOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CertificateManager.UpdateCertificateOptions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCertificateManagerUpdateCertificateOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CertificateManager.UpdateCertificateOptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CertificateManager.UpdateCertificateOptions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetCertificateManagerUpdateCertificateOptionsMutationOptions<
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
