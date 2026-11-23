import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLicenseKey() {
  return ['license'] as const
}

export function getLicenseeKey() {
  return ['licensee'] as const
}

export function getLicensetemplateKey() {
  return ['licensetemplate'] as const
}

export function getPaymentmethodKey() {
  return ['paymentmethod'] as const
}

export function getProductKey() {
  return ['product'] as const
}

export function getProductmoduleKey() {
  return ['productmodule'] as const
}

export function getTokenKey() {
  return ['token'] as const
}

export function getTransactionKey() {
  return ['transaction'] as const
}

export function getUtilityKey() {
  return ['utility'] as const
}

export function getLicenseQueryKey() {
  return ['license', '/license'] as const
}

export function getLicenseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicenseQueryKey>
  >({
    queryKey: getLicenseQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.license.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLicenseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLicenseQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLicenseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLicenseQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLicenseMutationKey() {
  return ['license', '/license', 'POST'] as const
}

export function getPostLicenseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$post>>>>>,
    TError,
    InferRequestType<typeof client.license.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.license.$post>) {
      return parseResponse(client.license.$post(args, options))
    },
  })
}

export function usePostLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$post>>>>>,
        TError,
        InferRequestType<typeof client.license.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLicenseLicenseNumberQueryKey(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$get']>,
) {
  return ['license', '/license/:licenseNumber', args] as const
}

export function getLicenseLicenseNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicenseLicenseNumberQueryKey>
  >({
    queryKey: getLicenseLicenseNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.license[':licenseNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLicenseLicenseNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicenseLicenseNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLicenseLicenseNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLicenseLicenseNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.license)[':licenseNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicenseLicenseNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLicenseLicenseNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLicenseLicenseNumberMutationKey() {
  return ['license', '/license/:licenseNumber', 'POST'] as const
}

export function getPostLicenseLicenseNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.license)[':licenseNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseLicenseNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.license)[':licenseNumber']['$post']>) {
      return parseResponse(client.license[':licenseNumber'].$post(args, options))
    },
  })
}

export function usePostLicenseLicenseNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.license)[':licenseNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseLicenseNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLicenseLicenseNumberMutationKey() {
  return ['license', '/license/:licenseNumber', 'DELETE'] as const
}

export function getDeleteLicenseLicenseNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.license)[':licenseNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLicenseLicenseNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.license)[':licenseNumber']['$delete']>) {
      return parseResponse(client.license[':licenseNumber'].$delete(args, options))
    },
  })
}

export function useDeleteLicenseLicenseNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.license)[':licenseNumber']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLicenseLicenseNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLicenseeQueryKey() {
  return ['licensee', '/licensee'] as const
}

export function getLicenseeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicenseeQueryKey>
  >({
    queryKey: getLicenseeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.licensee.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLicensee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLicenseeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLicenseeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLicensee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLicenseeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLicenseeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLicenseeMutationKey() {
  return ['licensee', '/licensee', 'POST'] as const
}

export function getPostLicenseeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$post>>>>>,
    TError,
    InferRequestType<typeof client.licensee.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.licensee.$post>) {
      return parseResponse(client.licensee.$post(args, options))
    },
  })
}

export function usePostLicensee<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.licensee.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLicenseeLicenseeNumberQueryKey(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>,
) {
  return ['licensee', '/licensee/:licenseeNumber', args] as const
}

export function getLicenseeLicenseeNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicenseeLicenseeNumberQueryKey>
  >({
    queryKey: getLicenseeLicenseeNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.licensee[':licenseeNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLicenseeLicenseeNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicenseeLicenseeNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getLicenseeLicenseeNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLicenseeLicenseeNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicenseeLicenseeNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLicenseeLicenseeNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLicenseeLicenseeNumberMutationKey() {
  return ['licensee', '/licensee/:licenseeNumber', 'POST'] as const
}

export function getPostLicenseeLicenseeNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseeLicenseeNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$post']>) {
      return parseResponse(client.licensee[':licenseeNumber'].$post(args, options))
    },
  })
}

export function usePostLicenseeLicenseeNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.licensee)[':licenseeNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseeLicenseeNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLicenseeLicenseeNumberMutationKey() {
  return ['licensee', '/licensee/:licenseeNumber', 'DELETE'] as const
}

export function getDeleteLicenseeLicenseeNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLicenseeLicenseeNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['$delete']>,
    ) {
      return parseResponse(client.licensee[':licenseeNumber'].$delete(args, options))
    },
  })
}

export function useDeleteLicenseeLicenseeNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.licensee)[':licenseeNumber']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLicenseeLicenseeNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLicenseeLicenseeNumberTransferMutationKey() {
  return ['licensee', '/licensee/:licenseeNumber/transfer', 'POST'] as const
}

export function getPostLicenseeLicenseeNumberTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseeLicenseeNumberTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>,
    ) {
      return parseResponse(client.licensee[':licenseeNumber'].transfer.$post(args, options))
    },
  })
}

export function usePostLicenseeLicenseeNumberTransfer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.licensee)[':licenseeNumber']['transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseeLicenseeNumberTransferMutationOptions<
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

export function getPostLicenseeLicenseeNumberValidateMutationKey() {
  return ['licensee', '/licensee/:licenseeNumber/validate', 'POST'] as const
}

export function getPostLicenseeLicenseeNumberValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicenseeLicenseeNumberValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>,
    ) {
      return parseResponse(client.licensee[':licenseeNumber'].validate.$post(args, options))
    },
  })
}

export function usePostLicenseeLicenseeNumberValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.licensee)[':licenseeNumber']['validate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicenseeLicenseeNumberValidateMutationOptions<
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

export function getLicensetemplateQueryKey() {
  return ['licensetemplate', '/licensetemplate'] as const
}

export function getLicensetemplateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensetemplateQueryKey>
  >({
    queryKey: getLicensetemplateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.licensetemplate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLicensetemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLicensetemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLicensetemplateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLicensetemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLicensetemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLicensetemplateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLicensetemplateMutationKey() {
  return ['licensetemplate', '/licensetemplate', 'POST'] as const
}

export function getPostLicensetemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.licensetemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicensetemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.licensetemplate.$post>) {
      return parseResponse(client.licensetemplate.$post(args, options))
    },
  })
}

export function usePostLicensetemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.licensetemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicensetemplateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLicensetemplateLicenseTemplateNumberQueryKey(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>,
) {
  return ['licensetemplate', '/licensetemplate/:licenseTemplateNumber', args] as const
}

export function getLicensetemplateLicenseTemplateNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicensetemplateLicenseTemplateNumberQueryKey>
  >({
    queryKey: getLicensetemplateLicenseTemplateNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.licensetemplate[':licenseTemplateNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLicensetemplateLicenseTemplateNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicensetemplateLicenseTemplateNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getLicensetemplateLicenseTemplateNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLicensetemplateLicenseTemplateNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicensetemplateLicenseTemplateNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLicensetemplateLicenseTemplateNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLicensetemplateLicenseTemplateNumberMutationKey() {
  return ['licensetemplate', '/licensetemplate/:licenseTemplateNumber', 'POST'] as const
}

export function getPostLicensetemplateLicenseTemplateNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLicensetemplateLicenseTemplateNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>,
    ) {
      return parseResponse(client.licensetemplate[':licenseTemplateNumber'].$post(args, options))
    },
  })
}

export function usePostLicensetemplateLicenseTemplateNumber<
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
                ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLicensetemplateLicenseTemplateNumberMutationOptions<
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

export function getDeleteLicensetemplateLicenseTemplateNumberMutationKey() {
  return ['licensetemplate', '/licensetemplate/:licenseTemplateNumber', 'DELETE'] as const
}

export function getDeleteLicensetemplateLicenseTemplateNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLicensetemplateLicenseTemplateNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>,
    ) {
      return parseResponse(client.licensetemplate[':licenseTemplateNumber'].$delete(args, options))
    },
  })
}

export function useDeleteLicensetemplateLicenseTemplateNumber<
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
                ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLicensetemplateLicenseTemplateNumberMutationOptions<
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

export function getPaymentmethodQueryKey() {
  return ['paymentmethod', '/paymentmethod'] as const
}

export function getPaymentmethodQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentmethodQueryKey>
  >({
    queryKey: getPaymentmethodQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentmethod.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePaymentmethod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentmethodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaymentmethodQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaymentmethod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentmethodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaymentmethodQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPaymentmethodPaymentMethodNumberQueryKey(
  args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>,
) {
  return ['paymentmethod', '/paymentmethod/:paymentMethodNumber', args] as const
}

export function getPaymentmethodPaymentMethodNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentmethodPaymentMethodNumberQueryKey>
  >({
    queryKey: getPaymentmethodPaymentMethodNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentmethod[':paymentMethodNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentmethodPaymentMethodNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentmethodPaymentMethodNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPaymentmethodPaymentMethodNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentmethodPaymentMethodNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentmethodPaymentMethodNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPaymentmethodPaymentMethodNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPaymentmethodPaymentMethodNumberMutationKey() {
  return ['paymentmethod', '/paymentmethod/:paymentMethodNumber', 'POST'] as const
}

export function getPostPaymentmethodPaymentMethodNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentmethodPaymentMethodNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>,
    ) {
      return parseResponse(client.paymentmethod[':paymentMethodNumber'].$post(args, options))
    },
  })
}

export function usePostPaymentmethodPaymentMethodNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentmethodPaymentMethodNumberMutationOptions<
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

export function getProductQueryKey() {
  return ['product', '/product'] as const
}

export function getProductQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductQueryKey>
  >({
    queryKey: getProductQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.product.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProduct<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProduct<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProductMutationKey() {
  return ['product', '/product', 'POST'] as const
}

export function getPostProductMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$post>>>>>,
    TError,
    InferRequestType<typeof client.product.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.product.$post>) {
      return parseResponse(client.product.$post(args, options))
    },
  })
}

export function usePostProduct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$post>>>>>,
        TError,
        InferRequestType<typeof client.product.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductProductNumberQueryKey(
  args: InferRequestType<(typeof client.product)[':productNumber']['$get']>,
) {
  return ['product', '/product/:productNumber', args] as const
}

export function getProductProductNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.product)[':productNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductProductNumberQueryKey>
  >({
    queryKey: getProductProductNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.product[':productNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductProductNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.product)[':productNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductProductNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductProductNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductProductNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.product)[':productNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductProductNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductProductNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProductProductNumberMutationKey() {
  return ['product', '/product/:productNumber', 'POST'] as const
}

export function getPostProductProductNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.product)[':productNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.product)[':productNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductProductNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.product)[':productNumber']['$post']>) {
      return parseResponse(client.product[':productNumber'].$post(args, options))
    },
  })
}

export function usePostProductProductNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.product)[':productNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.product)[':productNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductProductNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProductProductNumberMutationKey() {
  return ['product', '/product/:productNumber', 'DELETE'] as const
}

export function getDeleteProductProductNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.product)[':productNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.product)[':productNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductProductNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.product)[':productNumber']['$delete']>) {
      return parseResponse(client.product[':productNumber'].$delete(args, options))
    },
  })
}

export function useDeleteProductProductNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.product)[':productNumber']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.product)[':productNumber']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProductProductNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductmoduleQueryKey() {
  return ['productmodule', '/productmodule'] as const
}

export function getProductmoduleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductmoduleQueryKey>
  >({
    queryKey: getProductmoduleQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.productmodule.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProductmodule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductmoduleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductmoduleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductmodule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductmoduleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductmoduleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProductmoduleMutationKey() {
  return ['productmodule', '/productmodule', 'POST'] as const
}

export function getPostProductmoduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.productmodule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductmoduleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.productmodule.$post>) {
      return parseResponse(client.productmodule.$post(args, options))
    },
  })
}

export function usePostProductmodule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.productmodule.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductmoduleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductmoduleProductModuleNumberQueryKey(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>,
) {
  return ['productmodule', '/productmodule/:productModuleNumber', args] as const
}

export function getProductmoduleProductModuleNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductmoduleProductModuleNumberQueryKey>
  >({
    queryKey: getProductmoduleProductModuleNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.productmodule[':productModuleNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductmoduleProductModuleNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductmoduleProductModuleNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getProductmoduleProductModuleNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProductmoduleProductModuleNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductmoduleProductModuleNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getProductmoduleProductModuleNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProductmoduleProductModuleNumberMutationKey() {
  return ['productmodule', '/productmodule/:productModuleNumber', 'POST'] as const
}

export function getPostProductmoduleProductModuleNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductmoduleProductModuleNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$post']>,
    ) {
      return parseResponse(client.productmodule[':productModuleNumber'].$post(args, options))
    },
  })
}

export function usePostProductmoduleProductModuleNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductmoduleProductModuleNumberMutationOptions<
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

export function getDeleteProductmoduleProductModuleNumberMutationKey() {
  return ['productmodule', '/productmodule/:productModuleNumber', 'DELETE'] as const
}

export function getDeleteProductmoduleProductModuleNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductmoduleProductModuleNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$delete']>,
    ) {
      return parseResponse(client.productmodule[':productModuleNumber'].$delete(args, options))
    },
  })
}

export function useDeleteProductmoduleProductModuleNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProductmoduleProductModuleNumberMutationOptions<
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

export function getTokenQueryKey() {
  return ['token', '/token'] as const
}

export function getTokenQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTokenQueryKey>
  >({
    queryKey: getTokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.token.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useToken<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTokenQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToken<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTokenQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTokenMutationKey() {
  return ['token', '/token', 'POST'] as const
}

export function getPostTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.token.$post>) {
      return parseResponse(client.token.$post(args, options))
    },
  })
}

export function usePostToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
        TError,
        InferRequestType<typeof client.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTokenTokenNumberQueryKey(
  args: InferRequestType<(typeof client.token)[':tokenNumber']['$get']>,
) {
  return ['token', '/token/:tokenNumber', args] as const
}

export function getTokenTokenNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.token)[':tokenNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokenTokenNumberQueryKey>
  >({
    queryKey: getTokenTokenNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.token[':tokenNumber'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTokenTokenNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.token)[':tokenNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokenTokenNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTokenTokenNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTokenTokenNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.token)[':tokenNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokenTokenNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTokenTokenNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTokenTokenNumberMutationKey() {
  return ['token', '/token/:tokenNumber', 'DELETE'] as const
}

export function getDeleteTokenTokenNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.token)[':tokenNumber']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTokenTokenNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.token)[':tokenNumber']['$delete']>) {
      return parseResponse(client.token[':tokenNumber'].$delete(args, options))
    },
  })
}

export function useDeleteTokenTokenNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.token)[':tokenNumber']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTokenTokenNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTransactionQueryKey() {
  return ['transaction', '/transaction'] as const
}

export function getTransactionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionQueryKey>
  >({
    queryKey: getTransactionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.transaction.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTransaction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTransactionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTransaction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTransactionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTransactionMutationKey() {
  return ['transaction', '/transaction', 'POST'] as const
}

export function getPostTransactionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>>,
    TError,
    InferRequestType<typeof client.transaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transaction.$post>) {
      return parseResponse(client.transaction.$post(args, options))
    },
  })
}

export function usePostTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.transaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTransactionTransactionNumberQueryKey(
  args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>,
) {
  return ['transaction', '/transaction/:transactionNumber', args] as const
}

export function getTransactionTransactionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionTransactionNumberQueryKey>
  >({
    queryKey: getTransactionTransactionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transaction[':transactionNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTransactionTransactionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionTransactionNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTransactionTransactionNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTransactionTransactionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionTransactionNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTransactionTransactionNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTransactionTransactionNumberMutationKey() {
  return ['transaction', '/transaction/:transactionNumber', 'POST'] as const
}

export function getPostTransactionTransactionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transaction)[':transactionNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionTransactionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transaction)[':transactionNumber']['$post']>,
    ) {
      return parseResponse(client.transaction[':transactionNumber'].$post(args, options))
    },
  })
}

export function usePostTransactionTransactionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.transaction)[':transactionNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionTransactionNumberMutationOptions<
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

export function getUtilityLicenseTypesQueryKey() {
  return ['utility', '/utility/licenseTypes'] as const
}

export function getUtilityLicenseTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUtilityLicenseTypesQueryKey>
  >({
    queryKey: getUtilityLicenseTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.utility.licenseTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUtilityLicenseTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUtilityLicenseTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUtilityLicenseTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUtilityLicenseTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUtilityLicenseTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUtilityLicenseTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUtilityLicensingModelsQueryKey() {
  return ['utility', '/utility/licensingModels'] as const
}

export function getUtilityLicensingModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUtilityLicensingModelsQueryKey>
  >({
    queryKey: getUtilityLicensingModelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.utility.licensingModels.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUtilityLicensingModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUtilityLicensingModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUtilityLicensingModelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUtilityLicensingModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUtilityLicensingModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUtilityLicensingModelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
