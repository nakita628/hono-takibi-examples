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

export function createLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLicenseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicenseQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.license.$post>>>>>,
        TError,
        InferRequestType<typeof client.license.$post>,
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
    const mutationDefaults = getPostLicenseMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLicenseLicenseNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.license)[':licenseNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.license)[':licenseNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLicenseLicenseNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLicenseLicenseNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLicenseLicenseNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteLicenseLicenseNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLicenseLicenseNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLicensee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensee.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLicenseeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicenseeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLicensee<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLicenseeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLicenseeLicenseeNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.licensee)[':licenseeNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.licensee)[':licenseeNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLicenseeLicenseeNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLicenseeLicenseeNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLicenseeLicenseeNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteLicenseeLicenseeNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLicenseeLicenseeNumberMutationOptions<
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

export function createPostLicenseeLicenseeNumberTransfer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLicenseeLicenseeNumberTransferMutationOptions<
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

export function createPostLicenseeLicenseeNumberValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLicenseeLicenseeNumberValidateMutationOptions<
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

export function createLicensetemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensetemplate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicensetemplateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLicensetemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLicensetemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLicensetemplateLicenseTemplateNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.licensetemplate)[':licenseTemplateNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLicensetemplateLicenseTemplateNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLicensetemplateLicenseTemplateNumber<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLicensetemplateLicenseTemplateNumberMutationOptions<
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

export function createDeleteLicensetemplateLicenseTemplateNumber<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLicensetemplateLicenseTemplateNumberMutationOptions<
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

export function createPaymentmethod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentmethod.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentmethodQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPaymentmethodPaymentMethodNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.paymentmethod)[':paymentMethodNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPaymentmethodPaymentMethodNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostPaymentmethodPaymentMethodNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPaymentmethodPaymentMethodNumberMutationOptions<
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

export function createProduct<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostProduct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product.$post>>>>>,
        TError,
        InferRequestType<typeof client.product.$post>,
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
    const mutationDefaults = getPostProductMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createProductProductNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':productNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.product)[':productNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProductProductNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProductProductNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductProductNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProductProductNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProductProductNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createProductmodule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productmodule.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductmoduleQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostProductmodule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductmoduleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createProductmoduleProductModuleNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.productmodule)[':productModuleNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.productmodule)[':productModuleNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProductmoduleProductModuleNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProductmoduleProductModuleNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductmoduleProductModuleNumberMutationOptions<
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

export function createDeleteProductmoduleProductModuleNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProductmoduleProductModuleNumberMutationOptions<
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

export function createToken<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokenQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
        TError,
        InferRequestType<typeof client.token.$post>,
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
    const mutationDefaults = getPostTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTokenTokenNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.token)[':tokenNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.token)[':tokenNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokenTokenNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteTokenTokenNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTokenTokenNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTransaction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransactionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransactionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTransactionTransactionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transaction)[':transactionNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.transaction)[':transactionNumber']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTransactionTransactionNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTransactionTransactionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransactionTransactionNumberMutationOptions<
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

export function createUtilityLicenseTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utility.licenseTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUtilityLicenseTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createUtilityLicensingModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.utility.licensingModels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUtilityLicensingModelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
