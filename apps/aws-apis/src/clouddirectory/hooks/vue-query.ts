import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAmazonclouddirectoryKey() {
  return ['amazonclouddirectory'] as const
}

export function getPutAmazonclouddirectory20170111ObjectFacetsXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111ObjectFacetsXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111ObjectFacetsXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['facets#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111ObjectFacetsXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111ObjectFacetsXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111SchemaApplyXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111SchemaApplyXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['apply#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['apply#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111SchemaApplyXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['apply#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema['apply#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111SchemaApplyXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['apply#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['apply#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111SchemaApplyXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111ObjectAttachXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111ObjectAttachXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['attach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['attach#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111ObjectAttachXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['attach#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['attach#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111ObjectAttachXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['attach#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['attach#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111ObjectAttachXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111PolicyAttachXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111PolicyAttachXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attach#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111PolicyAttachXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attach#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].policy['attach#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111PolicyAttachXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attach#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attach#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111PolicyAttachXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111IndexAttachXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111IndexAttachXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['index']['attach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['index']['attach#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111IndexAttachXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['index']['attach#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].index['attach#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111IndexAttachXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['index']['attach#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['index']['attach#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111IndexAttachXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attach#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attach#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink['attach#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attach#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attach#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111BatchreadXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111BatchreadXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['batchread#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['batchread#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111BatchreadXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['batchread#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11']['batchread#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111BatchreadXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['batchread#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['batchread#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111BatchreadXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111BatchwriteXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111BatchwriteXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['batchwrite#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['batchwrite#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111BatchwriteXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['batchwrite#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11']['batchwrite#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111BatchwriteXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['batchwrite#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['batchwrite#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111BatchwriteXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111DirectoryCreateXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111DirectoryCreateXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['create#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['create#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111DirectoryCreateXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['directory']['create#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].directory['create#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111DirectoryCreateXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['directory']['create#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['create#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111DirectoryCreateXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111FacetCreateXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111FacetCreateXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet']['create#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet']['create#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111FacetCreateXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['facet']['create#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].facet['create#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111FacetCreateXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['facet']['create#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['facet']['create#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111FacetCreateXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111IndexXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/index#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111IndexXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['index#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['index#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111IndexXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['index#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11']['index#x-amz-data-partition'].$put(args, options),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111IndexXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['index#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['index#x-amz-data-partition']['$put']
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
  const mutationDefaults = getPutAmazonclouddirectory20170111IndexXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111ObjectXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111ObjectXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111ObjectXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11']['object#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111ObjectXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object#x-amz-data-partition']['$put']
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
  const mutationDefaults = getPutAmazonclouddirectory20170111ObjectXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111SchemaCreateMutationKey() {
  return ['amazonclouddirectory', '/amazonclouddirectory/2017-01-11/schema/create', 'PUT'] as const
}

export function getPutAmazonclouddirectory20170111SchemaCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['create']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['create']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111SchemaCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['create']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema.create.$put(args, options),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111SchemaCreate<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['create']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['create']['$put']
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
  const mutationDefaults = getPutAmazonclouddirectory20170111SchemaCreateMutationOptions<
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

export function getPutAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['create#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['create#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['create#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink.facet[
          'create#x-amz-data-partition'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['create#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['create#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111DirectoryXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111DirectoryXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111DirectoryXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['directory#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11']['directory#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111DirectoryXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['directory#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['directory#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111DirectoryXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111FacetDeleteXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111FacetDeleteXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet']['delete#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet']['delete#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111FacetDeleteXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['facet']['delete#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].facet['delete#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111FacetDeleteXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['facet']['delete#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['facet']['delete#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111FacetDeleteXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111ObjectDeleteXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111ObjectDeleteXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['delete#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['delete#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111ObjectDeleteXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['delete#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['delete#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111ObjectDeleteXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['delete#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['delete#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111ObjectDeleteXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111SchemaXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111SchemaXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111SchemaXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11']['schema#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111SchemaXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema#x-amz-data-partition']['$put']
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
  const mutationDefaults = getPutAmazonclouddirectory20170111SchemaXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['delete#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['delete#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['delete#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink.facet[
          'delete#x-amz-data-partition'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['delete#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['delete#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111IndexDetachXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111IndexDetachXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['index']['detach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['index']['detach#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111IndexDetachXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['index']['detach#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].index['detach#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111IndexDetachXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['index']['detach#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['index']['detach#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111IndexDetachXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111ObjectDetachXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111ObjectDetachXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['detach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['detach#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111ObjectDetachXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['detach#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['detach#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111ObjectDetachXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['detach#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['detach#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111ObjectDetachXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111PolicyDetachXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111PolicyDetachXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['policy']['detach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['policy']['detach#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111PolicyDetachXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['policy']['detach#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].policy['detach#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111PolicyDetachXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['policy']['detach#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['policy']['detach#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111PolicyDetachXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['detach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['detach#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['detach#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink['detach#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['detach#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['detach#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111DirectoryDisableXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111DirectoryDisableXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['disable#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['disable#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111DirectoryDisableXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['directory']['disable#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].directory['disable#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111DirectoryDisableXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['directory']['disable#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['disable#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111DirectoryDisableXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111DirectoryEnableXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111DirectoryEnableXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['enable#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['enable#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111DirectoryEnableXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['directory']['enable#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].directory['enable#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111DirectoryEnableXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['directory']['enable#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['enable#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111DirectoryEnableXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111SchemaGetappliedschemaMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/getappliedschema',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111SchemaGetappliedschemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['getappliedschema']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['getappliedschema']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111SchemaGetappliedschemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['getappliedschema']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema.getappliedschema.$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111SchemaGetappliedschema<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['getappliedschema']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['getappliedschema']['$post']
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
  const mutationDefaults = getPostAmazonclouddirectory20170111SchemaGetappliedschemaMutationOptions<
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

export function getPostAmazonclouddirectory20170111DirectoryGetXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111DirectoryGetXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['get#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['get#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111DirectoryGetXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['directory']['get#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].directory['get#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111DirectoryGetXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['directory']['get#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['get#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111DirectoryGetXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111FacetXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111FacetXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111FacetXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11']['facet#x-amz-data-partition'].$put(args, options),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111FacetXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$put']
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
  const mutationDefaults = getPutAmazonclouddirectory20170111FacetXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111FacetXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111FacetXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111FacetXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11']['facet#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111FacetXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$post']
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
  const mutationDefaults = getPostAmazonclouddirectory20170111FacetXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['get#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['get#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['get#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink.attributes[
          'get#x-amz-data-partition'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['get#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['get#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes']['get#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes']['get#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes']['get#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object.attributes[
          'get#x-amz-data-partition'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes']['get#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes']['get#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111ObjectInformationXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111ObjectInformationXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['information#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['information#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111ObjectInformationXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['information#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['information#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111ObjectInformationXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['information#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['information#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111ObjectInformationXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema['json#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111SchemaJsonXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema['json#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111SchemaJsonXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['get#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['get#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['get#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink.facet['get#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['get#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['get#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111SchemaAppliedMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/applied',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111SchemaAppliedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['applied']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['applied']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111SchemaAppliedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['applied']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema.applied.$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111SchemaApplied<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['applied']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['applied']['$post']
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
  const mutationDefaults = getPostAmazonclouddirectory20170111SchemaAppliedMutationOptions<
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

export function getPostAmazonclouddirectory20170111ObjectIndicesXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111ObjectIndicesXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['indices#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['indices#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111ObjectIndicesXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['indices#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['indices#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111ObjectIndicesXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['indices#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['indices#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111ObjectIndicesXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111SchemaDevelopmentMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/development',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111SchemaDevelopmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['development']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['development']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111SchemaDevelopmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['development']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema.development.$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111SchemaDevelopment<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['development']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['development']['$post']
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
  const mutationDefaults = getPostAmazonclouddirectory20170111SchemaDevelopmentMutationOptions<
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

export function getPostAmazonclouddirectory20170111DirectoryListMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/list',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111DirectoryListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['list']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['list']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111DirectoryListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['directory']['list']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].directory.list.$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111DirectoryList<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['directory']['list']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['list']['$post']
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
  const mutationDefaults = getPostAmazonclouddirectory20170111DirectoryListMutationOptions<
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

export function getPostAmazonclouddirectory20170111FacetAttributesXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111FacetAttributesXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet']['attributes#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet']['attributes#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111FacetAttributesXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['facet']['attributes#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].facet['attributes#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111FacetAttributesXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['facet']['attributes#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['facet']['attributes#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111FacetAttributesXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111FacetListXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111FacetListXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet']['list#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet']['list#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111FacetListXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['facet']['list#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].facet['list#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111FacetListXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['facet']['list#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['facet']['list#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111FacetListXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['incoming#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['incoming#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['incoming#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink['incoming#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['incoming#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['incoming#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111IndexTargetsXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111IndexTargetsXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['index']['targets#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['index']['targets#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111IndexTargetsXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['index']['targets#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].index['targets#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111IndexTargetsXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['index']['targets#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['index']['targets#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111IndexTargetsXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111SchemaManagedMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/managed',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111SchemaManagedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['managed']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['managed']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111SchemaManagedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['managed']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema.managed.$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111SchemaManaged<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['managed']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['managed']['$post']
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
  const mutationDefaults = getPostAmazonclouddirectory20170111SchemaManagedMutationOptions<
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

export function getPostAmazonclouddirectory20170111ObjectAttributesXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111ObjectAttributesXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111ObjectAttributesXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['attributes#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111ObjectAttributesXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111ObjectAttributesXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111ObjectChildrenXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111ObjectChildrenXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['children#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['children#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111ObjectChildrenXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['children#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['children#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111ObjectChildrenXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['children#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['children#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111ObjectChildrenXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['parentpaths#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['parentpaths#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['parentpaths#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['parentpaths#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['parentpaths#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['parentpaths#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111ObjectParentXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111ObjectParentXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['parent#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['parent#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111ObjectParentXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['parent#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['parent#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111ObjectParentXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['parent#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['parent#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111ObjectParentXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111ObjectPolicyXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111ObjectPolicyXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['policy#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['policy#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111ObjectPolicyXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['policy#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['policy#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111ObjectPolicyXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['policy#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['policy#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111ObjectPolicyXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['outgoing#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['outgoing#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['outgoing#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink['outgoing#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['outgoing#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['outgoing#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attachment#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attachment#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attachment#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].policy['attachment#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attachment#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attachment#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111SchemaPublishedMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/published',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111SchemaPublishedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['published']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['published']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111SchemaPublishedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['published']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema.published.$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111SchemaPublished<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['published']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['published']['$post']
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
  const mutationDefaults = getPostAmazonclouddirectory20170111SchemaPublishedMutationOptions<
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

export function getPostAmazonclouddirectory20170111TagsMutationKey() {
  return ['amazonclouddirectory', '/amazonclouddirectory/2017-01-11/tags', 'POST'] as const
}

export function getPostAmazonclouddirectory20170111TagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111TagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['$post']>,
    ) {
      return parseResponse(client.amazonclouddirectory['2017-01-11'].tags.$post(args, options))
    },
  })
}

export function usePostAmazonclouddirectory20170111Tags<
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
                  ReturnType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['$post']>,
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
  const mutationDefaults = getPostAmazonclouddirectory20170111TagsMutationOptions<
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

export function getPostAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['attributes#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['attributes#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['attributes#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink.facet[
          'attributes#x-amz-data-partition'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['attributes#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['attributes#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['list#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['list#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['list#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink.facet[
          'list#x-amz-data-partition'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['list#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['list#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartitionMutationOptions<
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

export function getPostAmazonclouddirectory20170111PolicyLookupXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111PolicyLookupXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['policy']['lookup#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['policy']['lookup#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAmazonclouddirectory20170111PolicyLookupXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['policy']['lookup#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].policy['lookup#x-amz-data-partition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111PolicyLookupXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['policy']['lookup#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['policy']['lookup#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111PolicyLookupXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111SchemaPublishXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111SchemaPublishXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['publish#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['publish#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111SchemaPublishXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['publish#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema['publish#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111SchemaPublishXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['publish#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['publish#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111SchemaPublishXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets']['delete#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets']['delete#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets']['delete#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object.facets['delete#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets']['delete#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets']['delete#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111TagsAddMutationKey() {
  return ['amazonclouddirectory', '/amazonclouddirectory/2017-01-11/tags/add', 'PUT'] as const
}

export function getPutAmazonclouddirectory20170111TagsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['add']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['add']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111TagsAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['tags']['add']['$put']
      >,
    ) {
      return parseResponse(client.amazonclouddirectory['2017-01-11'].tags.add.$put(args, options))
    },
  })
}

export function usePutAmazonclouddirectory20170111TagsAdd<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['tags']['add']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['tags']['add']['$put']
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
  const mutationDefaults = getPutAmazonclouddirectory20170111TagsAddMutationOptions<
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

export function getPutAmazonclouddirectory20170111TagsRemoveMutationKey() {
  return ['amazonclouddirectory', '/amazonclouddirectory/2017-01-11/tags/remove', 'PUT'] as const
}

export function getPutAmazonclouddirectory20170111TagsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['remove']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['remove']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111TagsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['tags']['remove']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].tags.remove.$put(args, options),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111TagsRemove<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['tags']['remove']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['tags']['remove']['$put']
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
  const mutationDefaults = getPutAmazonclouddirectory20170111TagsRemoveMutationOptions<
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

export function getPostAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition',
    'POST',
  ] as const
}

export function getPostAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['update#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['update#x-amz-data-partition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['update#x-amz-data-partition']['$post']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink.attributes[
          'update#x-amz-data-partition'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['update#x-amz-data-partition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['update#x-amz-data-partition']['$post']
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
    getPostAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111ObjectUpdateXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111ObjectUpdateXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['update#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['update#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111ObjectUpdateXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['object']['update#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].object['update#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111ObjectUpdateXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['object']['update#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['update#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111ObjectUpdateXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111SchemaUpdateXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111SchemaUpdateXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['update#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['update#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111SchemaUpdateXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['update#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema['update#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111SchemaUpdateXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['update#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['update#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111SchemaUpdateXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartitionMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet#x-amz-data-partition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet#x-amz-data-partition']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].typedlink['facet#x-amz-data-partition'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartition<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet#x-amz-data-partition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet#x-amz-data-partition']['$put']
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
    getPutAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartitionMutationOptions<
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

export function getPutAmazonclouddirectory20170111SchemaUpgradeappliedMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/upgradeapplied',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111SchemaUpgradeappliedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradeapplied']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradeapplied']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111SchemaUpgradeappliedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradeapplied']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema.upgradeapplied.$put(args, options),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111SchemaUpgradeapplied<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradeapplied']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradeapplied']['$put']
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
  const mutationDefaults = getPutAmazonclouddirectory20170111SchemaUpgradeappliedMutationOptions<
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

export function getPutAmazonclouddirectory20170111SchemaUpgradepublishedMutationKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/upgradepublished',
    'PUT',
  ] as const
}

export function getPutAmazonclouddirectory20170111SchemaUpgradepublishedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradepublished']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradepublished']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAmazonclouddirectory20170111SchemaUpgradepublishedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradepublished']['$put']
      >,
    ) {
      return parseResponse(
        client.amazonclouddirectory['2017-01-11'].schema.upgradepublished.$put(args, options),
      )
    },
  })
}

export function usePutAmazonclouddirectory20170111SchemaUpgradepublished<
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
                    (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradepublished']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradepublished']['$put']
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
  const mutationDefaults = getPutAmazonclouddirectory20170111SchemaUpgradepublishedMutationOptions<
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
