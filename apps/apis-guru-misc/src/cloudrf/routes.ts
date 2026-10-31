import { createRoute, z } from '@hono/zod-openapi'

const AntennaSchema = z
  .object({
    ant: z
      .int32()
      .default(1)
      .exactOptional()
      .openapi({ description: 'Antenna pattern code. 1=Vertical dipole (Omni-directional)' }),
    azi: z
      .int32()
      .min(0)
      .max(360)
      .default(0)
      .exactOptional()
      .openapi({ description: 'Antenna azimuth in degrees north' }),
    hbw: z
      .int32()
      .min(0)
      .max(360)
      .default(0)
      .exactOptional()
      .openapi({
        description: 'Custom antenna horizontal beamwidth in degrees. For use only with ant=0',
      }),
    pol: z
      .enum(['h', 'v'])
      .default('v')
      .exactOptional()
      .openapi({ description: 'Antenna polarization as either h or v' }),
    tlt: z
      .float32()
      .min(-10)
      .max(90)
      .default(0)
      .exactOptional()
      .openapi({ description: 'Antenna tilt in degrees below the horizon (inverted)' }),
    txg: z
      .float32()
      .min(-10)
      .max(60)
      .default(2.15)
      .exactOptional()
      .openapi({ description: 'Transmitter antenna gain in dBi' }),
    txl: z
      .float32()
      .min(0)
      .max(60)
      .default(0)
      .exactOptional()
      .openapi({ description: 'Feeder loss in dB' }),
    vbw: z
      .int32()
      .min(0)
      .max(360)
      .default(0)
      .exactOptional()
      .openapi({
        description: 'Custom antenna vertical beamwidth in degrees. For use only with ant=0',
      }),
  })
  .openapi({ required: [] })
  .openapi('Antenna')

const EnvironmentSchema = z
  .object({
    cll: z
      .int32()
      .min(1)
      .max(2)
      .default(2)
      .exactOptional()
      .openapi({
        description: 'Clutter loss. 0=None/DSM only, 1=Hard / LOS mode, 2=Soft / NLOS mode',
      }),
    clm: z
      .int32()
      .min(1)
      .max(2)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Clutter mode. 0=None/DSM only, 1=System & custom clutter, 2=Custom clutter only',
      }),
    mat: z
      .float32()
      .min(0.1)
      .max(9)
      .default(0.25)
      .exactOptional()
      .openapi({
        description:
          'Clutter attenuation override in dB/m based on a tree block OR hollow building. Light foliage=0.1dB/m, brick=1.0dB/m, concrete=5dB/m',
      }),
  })
  .openapi({ required: [] })
  .openapi('Environment')

const FeatureSchema = z
  .object({
    geometry: z.string().default("{'type':'Polygon','coordinates':[[]]}").exactOptional(),
    properties: z.string().default("{'height':4,'material':1}").exactOptional(),
    type: z.string().default('Feature').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Feature')

const ModelSchema = z
  .object({
    cli: z
      .int32()
      .min(1)
      .max(7)
      .default(6)
      .exactOptional()
      .openapi({
        description:
          'Radio climate for ITM model (1). 1: Equatorial (Congo) 2: Continental Subtropical (Sudan) 3: Maritime Subtropical (West coast of Africa) 4: Desert (Sahara) 5: Continental Temperate 6: Maritime Temperate, over land (UK and west coasts of US & EU) 7: Maritime Temperate, over sea',
      }),
    ked: z
      .int()
      .min(0)
      .max(1)
      .default(0)
      .exactOptional()
      .openapi({
        description: 'Knife edge diffraction for enhancing basic empirical models (Already in ITM)',
      }),
    pe: z
      .int32()
      .min(1)
      .max(3)
      .default(2)
      .exactOptional()
      .openapi({
        description:
          'Propagation model subtype/environment. 1=Conservative/Urban,2=Average/Suburban,3=Optimistic/rural',
      }),
    pm: z
      .int32()
      .min(1)
      .max(20)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Propagation model. 1=Irregular Terrain Model, 2=Line of Sight (LOS), 3=Hata, 4=ECC33, 5=SUI Microwave, 6=COST231, 7=Free space path loss, 9=Ericsson9999, 10=Plane earth loss, 11=Egli.',
      }),
    rel: z
      .int32()
      .min(50)
      .max(99)
      .default(95)
      .exactOptional()
      .openapi({ description: 'ITM model required reliability as %' }),
    ter: z
      .int32()
      .min(1)
      .max(6)
      .default(4)
      .exactOptional()
      .openapi({
        description:
          'Terrain code for ITM model (1). 1=Water,2=Wet ground,3=Farmland,4=Forest/Average,5=Mountain/Sand,6=City/Poor ground',
      }),
  })
  .openapi({ required: [] })
  .openapi('Model')

const OutputSchema = z
  .object({
    ber: z
      .int32()
      .min(0)
      .max(10)
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Bit error rate. 1=0.1, 2=0.01, 3=0.001, 4=0.0001,5=0.00001,6=0.000001. >6=Lora: 7=SF7,8=SF8,9=SF9,10=SF10,11=SF11,12=SF12',
      }),
    col: z
      .string()
      .default('RAINBOW.dBm')
      .exactOptional()
      .openapi({
        description:
          'Colour schema code OR filename. 1 = Cellular (5), 2=Red, 3=Green, 4=Blue, 5=Microwave(7), 7=Custom RGB, 8=Automatic by frequency, 9=Greyscale / GIS, 10=Rainbow(24), 11=Green/Blue/Red, 13=Sub noise floor (10), 14=TV broadcasting (4), 15=Red threshold, 16=Green threshold, 17=Blue threshold. RAINBOW.dBm, CUSTOMSCHEMA.dBm..',
      }),
    mod: z
      .int32()
      .min(1)
      .max(11)
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Modulation. 1=4QAM,2=16QAM,3=64QAM,4=256QAM,5=1024QAM,6=BPSK,7=QPSK,8=8PSK,9=16PSK,10=32PSK,11=LoRa',
      }),
    nf: z
      .int32()
      .min(-120)
      .max(-90)
      .default(-114)
      .exactOptional()
      .openapi({ description: 'Noise floor in dBm for use with out=4 / SNR' }),
    out: z
      .int32()
      .min(1)
      .max(4)
      .default(2)
      .exactOptional()
      .openapi({ description: 'Measured units. 1=dB,2=dBm,3=dBuV,4=SNR' }),
    rad: z
      .float32()
      .min(0.03)
      .max(300)
      .default(5)
      .exactOptional()
      .openapi({ description: 'Radius in kilometres for output' }),
    res: z
      .int32()
      .min(2)
      .max(200)
      .default(10)
      .exactOptional()
      .openapi({ description: 'Resolution in metres for output' }),
    units: z
      .enum(['metric', 'imperial'])
      .default('metric')
      .exactOptional()
      .openapi({
        description: 'Distance units in either metres/kilometres (metric) or feet/miles (imperial)',
      }),
  })
  .openapi({ required: [] })
  .openapi('Output')

const PointSchema = z
  .object({
    alt: z
      .float32()
      .min(0.1)
      .max(60000)
      .default(1)
      .exactOptional()
      .openapi({ description: 'Altitude above ground level in metres OR feet' }),
    lat: z
      .float32()
      .min(-89)
      .max(89)
      .default(38.916)
      .exactOptional()
      .openapi({ description: 'Latitude in decimal degrees' }),
    lon: z
      .float32()
      .min(-180)
      .max(180)
      .default(1.411)
      .exactOptional()
      .openapi({ description: 'Longitude in decimal degrees' }),
  })
  .openapi({ required: [] })
  .openapi('Point')

const ReceiverSchema = z
  .object({
    alt: z
      .float32()
      .min(0.1)
      .max(60000)
      .default(0.1)
      .exactOptional()
      .openapi({ description: 'Altitude above ground level in metres OR feet' }),
    lat: z
      .float32()
      .min(-89)
      .max(89)
      .default(0)
      .exactOptional()
      .openapi({ description: 'Latitude in decimal degrees' }),
    lon: z
      .float32()
      .min(-180)
      .max(180)
      .default(0)
      .exactOptional()
      .openapi({ description: 'Longitude in decimal degrees' }),
    rxg: z
      .float32()
      .min(-10)
      .max(60)
      .default(2.15)
      .exactOptional()
      .openapi({ description: 'Receiver antenna gain in dBi' }),
    rxs: z
      .float32()
      .min(-140)
      .max(200)
      .default(-90)
      .exactOptional()
      .openapi({
        description: "Receiver sensitivity/threshold in measured units defined by 'out' param",
      }),
  })
  .openapi({ required: [] })
  .openapi('Receiver')

const TransmitterSchema = z
  .object({
    alt: z
      .float32()
      .min(0.1)
      .max(60000)
      .default(1)
      .exactOptional()
      .openapi({ description: 'Altitude above ground level in metres OR feet' }),
    bwi: z
      .float32()
      .min(0.1)
      .max(100)
      .default(0.1)
      .exactOptional()
      .openapi({
        description:
          'Bandwidth in MHz. 1MHz has a noise floor of -114dBm. 10MHz = -104dBm, 20MHz = -101dBm',
      }),
    frq: z
      .float32()
      .min(1)
      .max(100000)
      .default(868)
      .exactOptional()
      .openapi({ description: 'Centre frequency in megahertz' }),
    lat: z
      .float32()
      .min(-89)
      .max(89)
      .default(38.916)
      .exactOptional()
      .openapi({ description: 'Latitude in decimal degrees' }),
    lon: z
      .float32()
      .min(-180)
      .max(180)
      .default(1.448)
      .exactOptional()
      .openapi({ description: 'Longitude in decimal degrees' }),
    txw: z
      .float32()
      .min(0.001)
      .max(2000000)
      .default(0.1)
      .exactOptional()
      .openapi({ description: 'Transmitter power in watts before the antenna' }),
  })
  .openapi({ required: [] })
  .openapi('Transmitter')

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'key', type: 'apiKey' }

export const getArchiveDeleteRoute = createRoute({
  method: 'get',
  path: '/archive/delete',
  tags: ['Manage'],
  summary: 'Delete a calculation from the database.',
  description:
    'Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.',
  operationId: 'delete',
  request: {
    query: z.object({
      cid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Unique calculation ID number',
            in: 'query',
            name: 'cid',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const getArchiveDeleteNetworkRoute = createRoute({
  method: 'get',
  path: '/archive/delete/network',
  tags: ['Manage'],
  summary: 'Delete an entire network',
  description:
    'Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.',
  operationId: 'deleteNetwork',
  request: {
    query: z.object({
      nid: z
        .string()
        .openapi({
          param: {
            description: 'Network name',
            in: 'query',
            name: 'nid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const getArchiveExportRoute = createRoute({
  method: 'get',
  path: '/archive/export',
  tags: ['Manage'],
  summary: 'Export a calculation in a GIS file format',
  description:
    'Download your data in a format suitable for a third party viewer like Google Earth or ESRI Arcmap.',
  operationId: 'export',
  request: {
    query: z.object({
      file: z
        .string()
        .openapi({
          param: {
            description: 'Calculation file name',
            in: 'query',
            name: 'file',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fmt: z
        .enum(['kml', 'kml', 'kmzppa', 'shp', 'tiff'])
        .openapi({
          param: {
            description: 'Raster/Vector file format: KML, KMZ, SHP, GeoTIFF',
            in: 'query',
            name: 'fmt',
            required: true,
            schema: { enum: ['kml', 'kml', 'kmzppa', 'shp', 'tiff'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const getArchiveListRoute = createRoute({
  method: 'get',
  path: '/archive/list',
  tags: ['Manage'],
  summary: 'List calculations from your archive',
  description:
    "List your area and path calculations, sorted by time and limited to the last few hundred. To fetch all for a given network append a 'net' filter with the network name.",
  operationId: 'list',
  request: {
    query: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'North bounding box',
            in: 'query',
            name: 'n',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      e: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'East bounding box',
            in: 'query',
            name: 'e',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      s: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'South bounding box',
            in: 'query',
            name: 's',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      w: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'West bounding box',
            in: 'query',
            name: 'w',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const postAreaRoute = createRoute({
  method: 'post',
  path: '/area',
  tags: ['Create'],
  summary: 'Create a point-to-multipoint heatmap',
  description:
    "An area coverage assumes the same receiver height at all locations out to fixed radius (maximum 300km). Due to it's exhaustive processing it is the slowest of all the API calls. Speed can be improved significantly by adjusting the resolution 'res' parameter. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.",
  operationId: 'area',
  request: {
    body: {
      description:
        'A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.',
      content: {
        'application/json': {
          schema: z
            .object({
              antenna: AntennaSchema.exactOptional(),
              environment: EnvironmentSchema.exactOptional(),
              model: ModelSchema.exactOptional(),
              network: z
                .string()
                .min(1)
                .max(24)
                .default('Testing')
                .exactOptional()
                .openapi({ description: 'Network name/group' }),
              output: OutputSchema.exactOptional(),
              receiver: ReceiverSchema.exactOptional(),
              site: z
                .string()
                .min(1)
                .max(24)
                .default('A1')
                .exactOptional()
                .openapi({ description: 'Site name' }),
              transmitter: TransmitterSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const postClutterAddRoute = createRoute({
  method: 'post',
  path: '/clutter/add',
  tags: ['Manage'],
  summary: 'Upload clutter data as GeoJSON',
  description:
    'Upload GeoJSON lineString and polygon features to your account. The height property is in metres and the material code / type / attenuation are.. 1\tTrees –\t0.25,2Trees +\t0.5,3\tTimber –\t1.0,4\tTimber +\t1.5,5\tBrick – \t1.5,6\tBrick +\t2.0,7\tConcrete –\t3.0,8\tConcrete +\t4.0,9\tMetal\t6.0',
  operationId: 'addClutter',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              features: z.array(FeatureSchema).exactOptional(),
              name: z.string().default('Clutter').exactOptional(),
              type: z.string().default('FeatureCollection').exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const getInterferenceRoute = createRoute({
  method: 'get',
  path: '/interference',
  tags: ['Analyse'],
  summary: 'Find the best server for overlapping coverage',
  description:
    'Merge and analyse sites within a network channel to determine the best server at a given location. Each site will be dynamically allocated a monochrome colour from a palette and the strongest signal promoted at a given location.',
  operationId: 'interference',
  request: {
    query: z.object({
      network: z
        .string()
        .openapi({
          param: {
            description: 'Network name eg. Overlapping broadcast stations',
            in: 'query',
            name: 'network',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'Interference layer name eg. QRM_map',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const getMeshRoute = createRoute({
  method: 'get',
  path: '/mesh',
  tags: ['Analyse'],
  summary: 'Merge sites into a super layer.',
  description:
    "A merge of 'area' calculations for a network to create a single super layer. Stronger signals are promoted over weaker ones. The same colour key must be used.",
  operationId: 'mesh',
  request: {
    query: z.object({
      network: z
        .string()
        .openapi({
          param: {
            description: 'Network name eg. 100_BLUE_repeaters_nationwide',
            in: 'query',
            name: 'network',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'Super layer name eg. National_map',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const getNetworkRoute = createRoute({
  method: 'get',
  path: '/network',
  tags: ['Analyse'],
  summary: 'Find the best server for somewhere',
  description:
    'Query your network to find the best server(s) for a given receiver/customer location. A previously generated network is required.',
  operationId: 'network',
  request: {
    query: z.object({
      net: z
        .string()
        .openapi({
          param: {
            description: 'Network name',
            in: 'query',
            name: 'net',
            required: true,
            schema: { type: 'string' },
          },
        }),
      nam: z
        .string()
        .openapi({
          param: {
            description: 'Super layer name',
            in: 'query',
            name: 'nam',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Latitude in decimal degrees',
            in: 'query',
            name: 'lat',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      lon: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Longitude in decimal degrees',
            in: 'query',
            name: 'lon',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      alt: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Height above ground level in metres',
            in: 'query',
            name: 'alt',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rxg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Receiver gain in dBi',
            in: 'query',
            name: 'rxg',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const postPathRoute = createRoute({
  method: 'post',
  path: '/path',
  tags: ['Create'],
  summary: 'Point-to-point path profile analysis (Tx to Rx)',
  description:
    'A path profile is a single link from A to B. It is much faster than an area calculation and can be used out to 300km. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.',
  operationId: 'path',
  request: {
    body: {
      description:
        'A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.',
      content: {
        'application/json': {
          schema: z
            .object({
              antenna: AntennaSchema.exactOptional(),
              environment: EnvironmentSchema.exactOptional(),
              model: ModelSchema.exactOptional(),
              network: z
                .string()
                .min(1)
                .max(24)
                .default('Testing')
                .exactOptional()
                .openapi({ description: 'Network name/group' }),
              output: OutputSchema.exactOptional(),
              receiver: ReceiverSchema.exactOptional(),
              site: z
                .string()
                .min(1)
                .max(24)
                .default('Link')
                .exactOptional()
                .openapi({ description: 'Site name' }),
              transmitter: TransmitterSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})

export const postPointsRoute = createRoute({
  method: 'post',
  path: '/points',
  tags: ['Create'],
  summary: 'Point-to-multipoint path profile analysis (Many Tx, one Rx)',
  description:
    'The points function tests many transmitters and one receiver and is designed for route analysis. A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.',
  operationId: 'points',
  request: {
    body: {
      description:
        'A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.',
      content: {
        'application/json': {
          schema: z
            .object({
              antenna: AntennaSchema.exactOptional(),
              environment: EnvironmentSchema.exactOptional(),
              model: ModelSchema.exactOptional(),
              network: z
                .string()
                .min(1)
                .max(24)
                .default('Testing')
                .exactOptional()
                .openapi({ description: 'Network name/group' }),
              output: OutputSchema.exactOptional(),
              points: z.array(PointSchema).exactOptional(),
              receiver: ReceiverSchema.exactOptional(),
              site: z
                .string()
                .min(1)
                .max(24)
                .default('Points')
                .exactOptional()
                .openapi({ description: 'Site name' }),
              transmitter: TransmitterSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Request OK', content: {} } },
  security: [{ ApiKeyAuth: [] }],
})
