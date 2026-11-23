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

export function getGeofencingKey() {
  return ['geofencing'] as const
}

export function getMapsKey() {
  return ['maps'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getPlacesKey() {
  return ['places'] as const
}

export function getRoutesKey() {
  return ['routes'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTrackingKey() {
  return ['tracking'] as const
}

export function getPostTrackingV0TrackersTrackerNameConsumersMutationKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/consumers', 'POST'] as const
}

export function getPostTrackingV0TrackersTrackerNameConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['consumers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['consumers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingV0TrackersTrackerNameConsumersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tracking.v0.trackers)[':TrackerName']['consumers']['$post']
      >,
    ) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName'].consumers.$post(args, options),
      )
    },
  })
}

export function createPostTrackingV0TrackersTrackerNameConsumers<
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
                  (typeof client.tracking.v0.trackers)[':TrackerName']['consumers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tracking.v0.trackers)[':TrackerName']['consumers']['$post']
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
    const mutationDefaults = getPostTrackingV0TrackersTrackerNameConsumersMutationOptions<
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

export function getPostTrackingV0TrackersTrackerNameDeletePositionsMutationKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/delete-positions', 'POST'] as const
}

export function getPostTrackingV0TrackersTrackerNameDeletePositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['delete-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['delete-positions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingV0TrackersTrackerNameDeletePositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tracking.v0.trackers)[':TrackerName']['delete-positions']['$post']
      >,
    ) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName']['delete-positions'].$post(args, options),
      )
    },
  })
}

export function createPostTrackingV0TrackersTrackerNameDeletePositions<
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
                  (typeof client.tracking.v0.trackers)[':TrackerName']['delete-positions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tracking.v0.trackers)[':TrackerName']['delete-positions']['$post']
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
    const mutationDefaults = getPostTrackingV0TrackersTrackerNameDeletePositionsMutationOptions<
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

export function getPostGeofencingV0CollectionsCollectionNameDeleteGeofencesMutationKey() {
  return [
    'geofencing',
    '/geofencing/v0/collections/:CollectionName/delete-geofences',
    'POST',
  ] as const
}

export function getPostGeofencingV0CollectionsCollectionNameDeleteGeofencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['delete-geofences']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['delete-geofences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGeofencingV0CollectionsCollectionNameDeleteGeofencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.geofencing.v0.collections)[':CollectionName']['delete-geofences']['$post']
      >,
    ) {
      return parseResponse(
        client.geofencing.v0.collections[':CollectionName']['delete-geofences'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostGeofencingV0CollectionsCollectionNameDeleteGeofences<
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
                  (typeof client.geofencing.v0.collections)[':CollectionName']['delete-geofences']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.geofencing.v0.collections)[':CollectionName']['delete-geofences']['$post']
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
      getPostGeofencingV0CollectionsCollectionNameDeleteGeofencesMutationOptions<
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

export function getPostGeofencingV0CollectionsCollectionNamePositionsMutationKey() {
  return ['geofencing', '/geofencing/v0/collections/:CollectionName/positions', 'POST'] as const
}

export function getPostGeofencingV0CollectionsCollectionNamePositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['positions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGeofencingV0CollectionsCollectionNamePositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.geofencing.v0.collections)[':CollectionName']['positions']['$post']
      >,
    ) {
      return parseResponse(
        client.geofencing.v0.collections[':CollectionName'].positions.$post(args, options),
      )
    },
  })
}

export function createPostGeofencingV0CollectionsCollectionNamePositions<
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
                  (typeof client.geofencing.v0.collections)[':CollectionName']['positions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.geofencing.v0.collections)[':CollectionName']['positions']['$post']
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
    const mutationDefaults = getPostGeofencingV0CollectionsCollectionNamePositionsMutationOptions<
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

export function getPostTrackingV0TrackersTrackerNameGetPositionsMutationKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/get-positions', 'POST'] as const
}

export function getPostTrackingV0TrackersTrackerNameGetPositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['get-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['get-positions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingV0TrackersTrackerNameGetPositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tracking.v0.trackers)[':TrackerName']['get-positions']['$post']
      >,
    ) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName']['get-positions'].$post(args, options),
      )
    },
  })
}

export function createPostTrackingV0TrackersTrackerNameGetPositions<
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
                  (typeof client.tracking.v0.trackers)[':TrackerName']['get-positions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tracking.v0.trackers)[':TrackerName']['get-positions']['$post']
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
    const mutationDefaults = getPostTrackingV0TrackersTrackerNameGetPositionsMutationOptions<
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

export function getPostGeofencingV0CollectionsCollectionNamePutGeofencesMutationKey() {
  return ['geofencing', '/geofencing/v0/collections/:CollectionName/put-geofences', 'POST'] as const
}

export function getPostGeofencingV0CollectionsCollectionNamePutGeofencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['put-geofences']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['put-geofences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGeofencingV0CollectionsCollectionNamePutGeofencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.geofencing.v0.collections)[':CollectionName']['put-geofences']['$post']
      >,
    ) {
      return parseResponse(
        client.geofencing.v0.collections[':CollectionName']['put-geofences'].$post(args, options),
      )
    },
  })
}

export function createPostGeofencingV0CollectionsCollectionNamePutGeofences<
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
                  (typeof client.geofencing.v0.collections)[':CollectionName']['put-geofences']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.geofencing.v0.collections)[':CollectionName']['put-geofences']['$post']
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
      getPostGeofencingV0CollectionsCollectionNamePutGeofencesMutationOptions<
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

export function getPostTrackingV0TrackersTrackerNamePositionsMutationKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/positions', 'POST'] as const
}

export function getPostTrackingV0TrackersTrackerNamePositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['positions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['positions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingV0TrackersTrackerNamePositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tracking.v0.trackers)[':TrackerName']['positions']['$post']
      >,
    ) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName'].positions.$post(args, options),
      )
    },
  })
}

export function createPostTrackingV0TrackersTrackerNamePositions<
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
                  (typeof client.tracking.v0.trackers)[':TrackerName']['positions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tracking.v0.trackers)[':TrackerName']['positions']['$post']
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
    const mutationDefaults = getPostTrackingV0TrackersTrackerNamePositionsMutationOptions<
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

export function getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMutationKey() {
  return ['routes', '/routes/v0/calculators/:CalculatorName/calculate/route', 'POST'] as const
}

export function getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route']['$post']
      >,
    ) {
      return parseResponse(
        client.routes.v0.calculators[':CalculatorName'].calculate.route.$post(args, options),
      )
    },
  })
}

export function createPostRoutesV0CalculatorsCalculatorNameCalculateRoute<
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
                  (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route']['$post']
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
    const mutationDefaults = getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMutationOptions<
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

export function getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixMutationKey() {
  return [
    'routes',
    '/routes/v0/calculators/:CalculatorName/calculate/route-matrix',
    'POST',
  ] as const
}

export function getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route-matrix']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route-matrix']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route-matrix']['$post']
      >,
    ) {
      return parseResponse(
        client.routes.v0.calculators[':CalculatorName'].calculate['route-matrix'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostRoutesV0CalculatorsCalculatorNameCalculateRouteMatrix<
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
                  (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route-matrix']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route-matrix']['$post']
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
      getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixMutationOptions<
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

export function getPostGeofencingV0CollectionsMutationKey() {
  return ['geofencing', '/geofencing/v0/collections', 'POST'] as const
}

export function getPostGeofencingV0CollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.geofencing.v0.collections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.geofencing.v0.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGeofencingV0CollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.geofencing.v0.collections.$post>) {
      return parseResponse(client.geofencing.v0.collections.$post(args, options))
    },
  })
}

export function createPostGeofencingV0Collections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.geofencing.v0.collections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.geofencing.v0.collections.$post>,
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
    const mutationDefaults = getPostGeofencingV0CollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMetadataV0KeysMutationKey() {
  return ['metadata', '/metadata/v0/keys', 'POST'] as const
}

export function getPostMetadataV0KeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v0.keys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metadata.v0.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataV0KeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata.v0.keys.$post>) {
      return parseResponse(client.metadata.v0.keys.$post(args, options))
    },
  })
}

export function createPostMetadataV0Keys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v0.keys.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.metadata.v0.keys.$post>,
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
    const mutationDefaults = getPostMetadataV0KeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMapsV0MapsMutationKey() {
  return ['maps', '/maps/v0/maps', 'POST'] as const
}

export function getPostMapsV0MapsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maps.v0.maps.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.maps.v0.maps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMapsV0MapsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.maps.v0.maps.$post>) {
      return parseResponse(client.maps.v0.maps.$post(args, options))
    },
  })
}

export function createPostMapsV0Maps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maps.v0.maps.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.maps.v0.maps.$post>,
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
    const mutationDefaults = getPostMapsV0MapsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPlacesV0IndexesMutationKey() {
  return ['places', '/places/v0/indexes', 'POST'] as const
}

export function getPostPlacesV0IndexesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.v0.indexes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.places.v0.indexes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlacesV0IndexesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.places.v0.indexes.$post>) {
      return parseResponse(client.places.v0.indexes.$post(args, options))
    },
  })
}

export function createPostPlacesV0Indexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.places.v0.indexes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.places.v0.indexes.$post>,
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
    const mutationDefaults = getPostPlacesV0IndexesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRoutesV0CalculatorsMutationKey() {
  return ['routes', '/routes/v0/calculators', 'POST'] as const
}

export function getPostRoutesV0CalculatorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.routes.v0.calculators.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.routes.v0.calculators.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutesV0CalculatorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.routes.v0.calculators.$post>) {
      return parseResponse(client.routes.v0.calculators.$post(args, options))
    },
  })
}

export function createPostRoutesV0Calculators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.routes.v0.calculators.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.routes.v0.calculators.$post>,
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
    const mutationDefaults = getPostRoutesV0CalculatorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTrackingV0TrackersMutationKey() {
  return ['tracking', '/tracking/v0/trackers', 'POST'] as const
}

export function getPostTrackingV0TrackersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking.v0.trackers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tracking.v0.trackers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingV0TrackersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tracking.v0.trackers.$post>) {
      return parseResponse(client.tracking.v0.trackers.$post(args, options))
    },
  })
}

export function createPostTrackingV0Trackers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tracking.v0.trackers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tracking.v0.trackers.$post>,
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
    const mutationDefaults = getPostTrackingV0TrackersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGeofencingV0CollectionsCollectionNameQueryKey(
  args: InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['geofencing', '/geofencing/v0/collections/:CollectionName', keyArgs] as const
}

export function getGeofencingV0CollectionsCollectionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeofencingV0CollectionsCollectionNameQueryKey>
  >({
    queryKey: getGeofencingV0CollectionsCollectionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geofencing.v0.collections[':CollectionName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGeofencingV0CollectionsCollectionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeofencingV0CollectionsCollectionNameQueryKey>
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
      ...getGeofencingV0CollectionsCollectionNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteGeofencingV0CollectionsCollectionNameMutationKey() {
  return ['geofencing', '/geofencing/v0/collections/:CollectionName', 'DELETE'] as const
}

export function getDeleteGeofencingV0CollectionsCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGeofencingV0CollectionsCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.geofencing.v0.collections)[':CollectionName']['$delete']
      >,
    ) {
      return parseResponse(
        client.geofencing.v0.collections[':CollectionName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteGeofencingV0CollectionsCollectionName<
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
                ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$delete']>,
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
    const mutationDefaults = getDeleteGeofencingV0CollectionsCollectionNameMutationOptions<
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

export function getPatchGeofencingV0CollectionsCollectionNameMutationKey() {
  return ['geofencing', '/geofencing/v0/collections/:CollectionName', 'PATCH'] as const
}

export function getPatchGeofencingV0CollectionsCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGeofencingV0CollectionsCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.geofencing.v0.collections)[':CollectionName']['$patch']
      >,
    ) {
      return parseResponse(
        client.geofencing.v0.collections[':CollectionName'].$patch(args, options),
      )
    },
  })
}

export function createPatchGeofencingV0CollectionsCollectionName<
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
                ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$patch']>,
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
    const mutationDefaults = getPatchGeofencingV0CollectionsCollectionNameMutationOptions<
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

export function getMetadataV0KeysKeyNameQueryKey(
  args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['metadata', '/metadata/v0/keys/:KeyName', keyArgs] as const
}

export function getMetadataV0KeysKeyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV0KeysKeyNameQueryKey>
  >({
    queryKey: getMetadataV0KeysKeyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.v0.keys[':KeyName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetadataV0KeysKeyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataV0KeysKeyNameQueryKey>
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
      ...getMetadataV0KeysKeyNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteMetadataV0KeysKeyNameMutationKey() {
  return ['metadata', '/metadata/v0/keys/:KeyName', 'DELETE'] as const
}

export function getDeleteMetadataV0KeysKeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetadataV0KeysKeyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$delete']>,
    ) {
      return parseResponse(client.metadata.v0.keys[':KeyName'].$delete(args, options))
    },
  })
}

export function createDeleteMetadataV0KeysKeyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$delete']>,
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
    const mutationDefaults = getDeleteMetadataV0KeysKeyNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchMetadataV0KeysKeyNameMutationKey() {
  return ['metadata', '/metadata/v0/keys/:KeyName', 'PATCH'] as const
}

export function getPatchMetadataV0KeysKeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMetadataV0KeysKeyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$patch']>,
    ) {
      return parseResponse(client.metadata.v0.keys[':KeyName'].$patch(args, options))
    },
  })
}

export function createPatchMetadataV0KeysKeyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$patch']>,
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
    const mutationDefaults = getPatchMetadataV0KeysKeyNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMapsV0MapsMapNameQueryKey(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName', keyArgs] as const
}

export function getMapsV0MapsMapNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsV0MapsMapNameQueryKey>
  >({
    queryKey: getMapsV0MapsMapNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maps.v0.maps[':MapName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapsV0MapsMapName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsV0MapsMapNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMapsV0MapsMapNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteMapsV0MapsMapNameMutationKey() {
  return ['maps', '/maps/v0/maps/:MapName', 'DELETE'] as const
}

export function getDeleteMapsV0MapsMapNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMapsV0MapsMapNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$delete']>) {
      return parseResponse(client.maps.v0.maps[':MapName'].$delete(args, options))
    },
  })
}

export function createDeleteMapsV0MapsMapName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$delete']>,
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
    const mutationDefaults = getDeleteMapsV0MapsMapNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchMapsV0MapsMapNameMutationKey() {
  return ['maps', '/maps/v0/maps/:MapName', 'PATCH'] as const
}

export function getPatchMapsV0MapsMapNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMapsV0MapsMapNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$patch']>) {
      return parseResponse(client.maps.v0.maps[':MapName'].$patch(args, options))
    },
  })
}

export function createPatchMapsV0MapsMapName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$patch']>,
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
    const mutationDefaults = getPatchMapsV0MapsMapNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlacesV0IndexesIndexNameQueryKey(
  args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['places', '/places/v0/indexes/:IndexName', keyArgs] as const
}

export function getPlacesV0IndexesIndexNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlacesV0IndexesIndexNameQueryKey>
  >({
    queryKey: getPlacesV0IndexesIndexNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.places.v0.indexes[':IndexName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlacesV0IndexesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlacesV0IndexesIndexNameQueryKey>
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
      ...getPlacesV0IndexesIndexNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePlacesV0IndexesIndexNameMutationKey() {
  return ['places', '/places/v0/indexes/:IndexName', 'DELETE'] as const
}

export function getDeletePlacesV0IndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlacesV0IndexesIndexNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$delete']>,
    ) {
      return parseResponse(client.places.v0.indexes[':IndexName'].$delete(args, options))
    },
  })
}

export function createDeletePlacesV0IndexesIndexName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$delete']>,
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
    const mutationDefaults = getDeletePlacesV0IndexesIndexNameMutationOptions<
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

export function getPatchPlacesV0IndexesIndexNameMutationKey() {
  return ['places', '/places/v0/indexes/:IndexName', 'PATCH'] as const
}

export function getPatchPlacesV0IndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPlacesV0IndexesIndexNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$patch']>,
    ) {
      return parseResponse(client.places.v0.indexes[':IndexName'].$patch(args, options))
    },
  })
}

export function createPatchPlacesV0IndexesIndexName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$patch']>,
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
    const mutationDefaults = getPatchPlacesV0IndexesIndexNameMutationOptions<
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

export function getRoutesV0CalculatorsCalculatorNameQueryKey(
  args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['routes', '/routes/v0/calculators/:CalculatorName', keyArgs] as const
}

export function getRoutesV0CalculatorsCalculatorNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesV0CalculatorsCalculatorNameQueryKey>
  >({
    queryKey: getRoutesV0CalculatorsCalculatorNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes.v0.calculators[':CalculatorName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoutesV0CalculatorsCalculatorName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutesV0CalculatorsCalculatorNameQueryKey>
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
      ...getRoutesV0CalculatorsCalculatorNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteRoutesV0CalculatorsCalculatorNameMutationKey() {
  return ['routes', '/routes/v0/calculators/:CalculatorName', 'DELETE'] as const
}

export function getDeleteRoutesV0CalculatorsCalculatorNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoutesV0CalculatorsCalculatorNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$delete']>,
    ) {
      return parseResponse(client.routes.v0.calculators[':CalculatorName'].$delete(args, options))
    },
  })
}

export function createDeleteRoutesV0CalculatorsCalculatorName<
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
                ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$delete']>,
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
    const mutationDefaults = getDeleteRoutesV0CalculatorsCalculatorNameMutationOptions<
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

export function getPatchRoutesV0CalculatorsCalculatorNameMutationKey() {
  return ['routes', '/routes/v0/calculators/:CalculatorName', 'PATCH'] as const
}

export function getPatchRoutesV0CalculatorsCalculatorNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoutesV0CalculatorsCalculatorNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$patch']>,
    ) {
      return parseResponse(client.routes.v0.calculators[':CalculatorName'].$patch(args, options))
    },
  })
}

export function createPatchRoutesV0CalculatorsCalculatorName<
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
                ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$patch']>,
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
    const mutationDefaults = getPatchRoutesV0CalculatorsCalculatorNameMutationOptions<
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

export function getTrackingV0TrackersTrackerNameQueryKey(
  args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking', '/tracking/v0/trackers/:TrackerName', keyArgs] as const
}

export function getTrackingV0TrackersTrackerNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingV0TrackersTrackerNameQueryKey>
  >({
    queryKey: getTrackingV0TrackersTrackerNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrackingV0TrackersTrackerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingV0TrackersTrackerNameQueryKey>
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
      ...getTrackingV0TrackersTrackerNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteTrackingV0TrackersTrackerNameMutationKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName', 'DELETE'] as const
}

export function getDeleteTrackingV0TrackersTrackerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTrackingV0TrackersTrackerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$delete']>,
    ) {
      return parseResponse(client.tracking.v0.trackers[':TrackerName'].$delete(args, options))
    },
  })
}

export function createDeleteTrackingV0TrackersTrackerName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$delete']>,
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
    const mutationDefaults = getDeleteTrackingV0TrackersTrackerNameMutationOptions<
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

export function getPatchTrackingV0TrackersTrackerNameMutationKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName', 'PATCH'] as const
}

export function getPatchTrackingV0TrackersTrackerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTrackingV0TrackersTrackerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$patch']>,
    ) {
      return parseResponse(client.tracking.v0.trackers[':TrackerName'].$patch(args, options))
    },
  })
}

export function createPatchTrackingV0TrackersTrackerName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$patch']>,
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
    const mutationDefaults = getPatchTrackingV0TrackersTrackerNameMutationOptions<
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

export function getDeleteTrackingV0TrackersTrackerNameConsumersConsumerArnMutationKey() {
  return [
    'tracking',
    '/tracking/v0/trackers/:TrackerName/consumers/:ConsumerArn',
    'DELETE',
  ] as const
}

export function getDeleteTrackingV0TrackersTrackerNameConsumersConsumerArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['consumers'][':ConsumerArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['consumers'][':ConsumerArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTrackingV0TrackersTrackerNameConsumersConsumerArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tracking.v0.trackers)[':TrackerName']['consumers'][':ConsumerArn']['$delete']
      >,
    ) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName'].consumers[':ConsumerArn'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteTrackingV0TrackersTrackerNameConsumersConsumerArn<
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
                  (typeof client.tracking.v0.trackers)[':TrackerName']['consumers'][':ConsumerArn']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tracking.v0.trackers)[':TrackerName']['consumers'][':ConsumerArn']['$delete']
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
      getDeleteTrackingV0TrackersTrackerNameConsumersConsumerArnMutationOptions<
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

export function getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestQueryKey(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'tracking',
    '/tracking/v0/trackers/:TrackerName/devices/:DeviceId/positions/latest',
    keyArgs,
  ] as const
}

export function getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestQueryKey>
  >({
    queryKey: getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName'].devices[':DeviceId'].positions.latest.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestQueryKey>
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
      ...getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsMutationKey() {
  return [
    'tracking',
    '/tracking/v0/trackers/:TrackerName/devices/:DeviceId/list-positions',
    'POST',
  ] as const
}

export function getPostTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['list-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['list-positions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['list-positions']['$post']
      >,
    ) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName'].devices[':DeviceId']['list-positions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostTrackingV0TrackersTrackerNameDevicesDeviceIdListPositions<
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
                  (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['list-positions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['list-positions']['$post']
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
      getPostTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsMutationOptions<
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

export function getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdQueryKey(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'geofencing',
    '/geofencing/v0/collections/:CollectionName/geofences/:GeofenceId',
    keyArgs,
  ] as const
}

export function getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdQueryKey>
  >({
    queryKey: getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geofencing.v0.collections[':CollectionName'].geofences[':GeofenceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGeofencingV0CollectionsCollectionNameGeofencesGeofenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdQueryKey>
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
      ...getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdMutationKey() {
  return [
    'geofencing',
    '/geofencing/v0/collections/:CollectionName/geofences/:GeofenceId',
    'PUT',
  ] as const
}

export function getPutGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$put']
      >,
    ) {
      return parseResponse(
        client.geofencing.v0.collections[':CollectionName'].geofences[':GeofenceId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutGeofencingV0CollectionsCollectionNameGeofencesGeofenceId<
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
                  (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$put']
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
      getPutGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdMutationOptions<
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

export function getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeQueryKey(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName/glyphs/:FontStack/:FontUnicodeRange', keyArgs] as const
}

export function getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeQueryKey>
  >({
    queryKey: getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maps.v0.maps[':MapName'].glyphs[':FontStack'][':FontUnicodeRange'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapsV0MapsMapNameGlyphsFontStackFontUnicodeRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeQueryKey>
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
      ...getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMapsV0MapsMapNameSpritesFileNameQueryKey(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName/sprites/:FileName', keyArgs] as const
}

export function getMapsV0MapsMapNameSpritesFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsV0MapsMapNameSpritesFileNameQueryKey>
  >({
    queryKey: getMapsV0MapsMapNameSpritesFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maps.v0.maps[':MapName'].sprites[':FileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapsV0MapsMapNameSpritesFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsV0MapsMapNameSpritesFileNameQueryKey>
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
      ...getMapsV0MapsMapNameSpritesFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMapsV0MapsMapNameStyleDescriptorQueryKey(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName/style-descriptor', keyArgs] as const
}

export function getMapsV0MapsMapNameStyleDescriptorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsV0MapsMapNameStyleDescriptorQueryKey>
  >({
    queryKey: getMapsV0MapsMapNameStyleDescriptorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maps.v0.maps[':MapName']['style-descriptor'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapsV0MapsMapNameStyleDescriptor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsV0MapsMapNameStyleDescriptorQueryKey>
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
      ...getMapsV0MapsMapNameStyleDescriptorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMapsV0MapsMapNameTilesZXYQueryKey(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName/tiles/:Z/:X/:Y', keyArgs] as const
}

export function getMapsV0MapsMapNameTilesZXYQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsV0MapsMapNameTilesZXYQueryKey>
  >({
    queryKey: getMapsV0MapsMapNameTilesZXYQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maps.v0.maps[':MapName'].tiles[':Z'][':X'][':Y'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapsV0MapsMapNameTilesZXY<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsV0MapsMapNameTilesZXYQueryKey>
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
      ...getMapsV0MapsMapNameTilesZXYQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPlacesV0IndexesIndexNamePlacesPlaceIdQueryKey(
  args: InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['places', '/places/v0/indexes/:IndexName/places/:PlaceId', keyArgs] as const
}

export function getPlacesV0IndexesIndexNamePlacesPlaceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlacesV0IndexesIndexNamePlacesPlaceIdQueryKey>
  >({
    queryKey: getPlacesV0IndexesIndexNamePlacesPlaceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.places.v0.indexes[':IndexName'].places[':PlaceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlacesV0IndexesIndexNamePlacesPlaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlacesV0IndexesIndexNamePlacesPlaceIdQueryKey>
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
      ...getPlacesV0IndexesIndexNamePlacesPlaceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTrackingV0TrackersTrackerNameListPositionsMutationKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/list-positions', 'POST'] as const
}

export function getPostTrackingV0TrackersTrackerNameListPositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['list-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['list-positions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingV0TrackersTrackerNameListPositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tracking.v0.trackers)[':TrackerName']['list-positions']['$post']
      >,
    ) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName']['list-positions'].$post(args, options),
      )
    },
  })
}

export function createPostTrackingV0TrackersTrackerNameListPositions<
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
                  (typeof client.tracking.v0.trackers)[':TrackerName']['list-positions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tracking.v0.trackers)[':TrackerName']['list-positions']['$post']
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
    const mutationDefaults = getPostTrackingV0TrackersTrackerNameListPositionsMutationOptions<
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

export function getPostGeofencingV0ListCollectionsMutationKey() {
  return ['geofencing', '/geofencing/v0/list-collections', 'POST'] as const
}

export function getPostGeofencingV0ListCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.geofencing.v0)['list-collections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.geofencing.v0)['list-collections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGeofencingV0ListCollectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.geofencing.v0)['list-collections']['$post']>,
    ) {
      return parseResponse(client.geofencing.v0['list-collections'].$post(args, options))
    },
  })
}

export function createPostGeofencingV0ListCollections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.geofencing.v0)['list-collections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.geofencing.v0)['list-collections']['$post']>,
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
    const mutationDefaults = getPostGeofencingV0ListCollectionsMutationOptions<
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

export function getPostGeofencingV0CollectionsCollectionNameListGeofencesMutationKey() {
  return [
    'geofencing',
    '/geofencing/v0/collections/:CollectionName/list-geofences',
    'POST',
  ] as const
}

export function getPostGeofencingV0CollectionsCollectionNameListGeofencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['list-geofences']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['list-geofences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGeofencingV0CollectionsCollectionNameListGeofencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.geofencing.v0.collections)[':CollectionName']['list-geofences']['$post']
      >,
    ) {
      return parseResponse(
        client.geofencing.v0.collections[':CollectionName']['list-geofences'].$post(args, options),
      )
    },
  })
}

export function createPostGeofencingV0CollectionsCollectionNameListGeofences<
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
                  (typeof client.geofencing.v0.collections)[':CollectionName']['list-geofences']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.geofencing.v0.collections)[':CollectionName']['list-geofences']['$post']
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
      getPostGeofencingV0CollectionsCollectionNameListGeofencesMutationOptions<
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

export function getPostMetadataV0ListKeysMutationKey() {
  return ['metadata', '/metadata/v0/list-keys', 'POST'] as const
}

export function getPostMetadataV0ListKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metadata.v0)['list-keys']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.metadata.v0)['list-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataV0ListKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.metadata.v0)['list-keys']['$post']>) {
      return parseResponse(client.metadata.v0['list-keys'].$post(args, options))
    },
  })
}

export function createPostMetadataV0ListKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metadata.v0)['list-keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.metadata.v0)['list-keys']['$post']>,
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
    const mutationDefaults = getPostMetadataV0ListKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMapsV0ListMapsMutationKey() {
  return ['maps', '/maps/v0/list-maps', 'POST'] as const
}

export function getPostMapsV0ListMapsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.maps.v0)['list-maps']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.maps.v0)['list-maps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMapsV0ListMapsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.maps.v0)['list-maps']['$post']>) {
      return parseResponse(client.maps.v0['list-maps'].$post(args, options))
    },
  })
}

export function createPostMapsV0ListMaps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.maps.v0)['list-maps']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.maps.v0)['list-maps']['$post']>,
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
    const mutationDefaults = getPostMapsV0ListMapsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPlacesV0ListIndexesMutationKey() {
  return ['places', '/places/v0/list-indexes', 'POST'] as const
}

export function getPostPlacesV0ListIndexesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.places.v0)['list-indexes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.places.v0)['list-indexes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlacesV0ListIndexesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.places.v0)['list-indexes']['$post']>) {
      return parseResponse(client.places.v0['list-indexes'].$post(args, options))
    },
  })
}

export function createPostPlacesV0ListIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.places.v0)['list-indexes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.places.v0)['list-indexes']['$post']>,
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
    const mutationDefaults = getPostPlacesV0ListIndexesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRoutesV0ListCalculatorsMutationKey() {
  return ['routes', '/routes/v0/list-calculators', 'POST'] as const
}

export function getPostRoutesV0ListCalculatorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes.v0)['list-calculators']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routes.v0)['list-calculators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutesV0ListCalculatorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.routes.v0)['list-calculators']['$post']>,
    ) {
      return parseResponse(client.routes.v0['list-calculators'].$post(args, options))
    },
  })
}

export function createPostRoutesV0ListCalculators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.routes.v0)['list-calculators']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.routes.v0)['list-calculators']['$post']>,
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
    const mutationDefaults = getPostRoutesV0ListCalculatorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>) {
      return parseResponse(client.tags[':ResourceArn'].$post(args, options))
    },
  })
}

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTrackingV0TrackersTrackerNameListConsumersMutationKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/list-consumers', 'POST'] as const
}

export function getPostTrackingV0TrackersTrackerNameListConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['list-consumers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['list-consumers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingV0TrackersTrackerNameListConsumersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tracking.v0.trackers)[':TrackerName']['list-consumers']['$post']
      >,
    ) {
      return parseResponse(
        client.tracking.v0.trackers[':TrackerName']['list-consumers'].$post(args, options),
      )
    },
  })
}

export function createPostTrackingV0TrackersTrackerNameListConsumers<
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
                  (typeof client.tracking.v0.trackers)[':TrackerName']['list-consumers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.tracking.v0.trackers)[':TrackerName']['list-consumers']['$post']
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
    const mutationDefaults = getPostTrackingV0TrackersTrackerNameListConsumersMutationOptions<
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

export function getPostTrackingV0ListTrackersMutationKey() {
  return ['tracking', '/tracking/v0/list-trackers', 'POST'] as const
}

export function getPostTrackingV0ListTrackersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracking.v0)['list-trackers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tracking.v0)['list-trackers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTrackingV0ListTrackersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tracking.v0)['list-trackers']['$post']>,
    ) {
      return parseResponse(client.tracking.v0['list-trackers'].$post(args, options))
    },
  })
}

export function createPostTrackingV0ListTrackers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tracking.v0)['list-trackers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tracking.v0)['list-trackers']['$post']>,
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
    const mutationDefaults = getPostTrackingV0ListTrackersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPlacesV0IndexesIndexNameSearchPositionMutationKey() {
  return ['places', '/places/v0/indexes/:IndexName/search/position', 'POST'] as const
}

export function getPostPlacesV0IndexesIndexNameSearchPositionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.places.v0.indexes)[':IndexName']['search']['position']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.places.v0.indexes)[':IndexName']['search']['position']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPlacesV0IndexesIndexNameSearchPositionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.places.v0.indexes)[':IndexName']['search']['position']['$post']
      >,
    ) {
      return parseResponse(
        client.places.v0.indexes[':IndexName'].search.position.$post(args, options),
      )
    },
  })
}

export function createPostPlacesV0IndexesIndexNameSearchPosition<
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
                  (typeof client.places.v0.indexes)[':IndexName']['search']['position']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.places.v0.indexes)[':IndexName']['search']['position']['$post']
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
    const mutationDefaults = getPostPlacesV0IndexesIndexNameSearchPositionMutationOptions<
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

export function getPostPlacesV0IndexesIndexNameSearchSuggestionsMutationKey() {
  return ['places', '/places/v0/indexes/:IndexName/search/suggestions', 'POST'] as const
}

export function getPostPlacesV0IndexesIndexNameSearchSuggestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.places.v0.indexes)[':IndexName']['search']['suggestions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.places.v0.indexes)[':IndexName']['search']['suggestions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPlacesV0IndexesIndexNameSearchSuggestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.places.v0.indexes)[':IndexName']['search']['suggestions']['$post']
      >,
    ) {
      return parseResponse(
        client.places.v0.indexes[':IndexName'].search.suggestions.$post(args, options),
      )
    },
  })
}

export function createPostPlacesV0IndexesIndexNameSearchSuggestions<
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
                  (typeof client.places.v0.indexes)[':IndexName']['search']['suggestions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.places.v0.indexes)[':IndexName']['search']['suggestions']['$post']
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
    const mutationDefaults = getPostPlacesV0IndexesIndexNameSearchSuggestionsMutationOptions<
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

export function getPostPlacesV0IndexesIndexNameSearchTextMutationKey() {
  return ['places', '/places/v0/indexes/:IndexName/search/text', 'POST'] as const
}

export function getPostPlacesV0IndexesIndexNameSearchTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.places.v0.indexes)[':IndexName']['search']['text']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['search']['text']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlacesV0IndexesIndexNameSearchTextMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.places.v0.indexes)[':IndexName']['search']['text']['$post']
      >,
    ) {
      return parseResponse(client.places.v0.indexes[':IndexName'].search.text.$post(args, options))
    },
  })
}

export function createPostPlacesV0IndexesIndexNameSearchText<
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
                  (typeof client.places.v0.indexes)[':IndexName']['search']['text']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.places.v0.indexes)[':IndexName']['search']['text']['$post']
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
    const mutationDefaults = getPostPlacesV0IndexesIndexNameSearchTextMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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
