export type Primitive = string | number | boolean;

export interface ResourceContext {
  resource: string;
  key: string; // 'extraKey' = key + '_extra'
  value: string;
  extra?: Record<string, Primitive>;
}

function getResourceContext(resourceName: string, metadataKey: string, index: number = 0): ResourceContext {
  const value = GetResourceMetadata(resourceName, metadataKey, index);
  const extra = GetResourceMetadata<Record<string, Primitive> | undefined>(`${resourceName}_extra`, metadataKey, index);

  return {
    resource: resourceName,
    key: metadataKey,
    value,
    extra
  };
}

function* getResourceIterator(resourceName: string, metadataKey: string): Generator<ResourceContext> {
  const count = GetNumResourceMetadata(resourceName, metadataKey);

  for (let index = 0; index < count; index++) {  
    yield getResourceContext(resourceName, metadataKey, index);
  }

  return null;
}

exports('GetResourceContext', getResourceContext);
exports('GetResourceIterator', getResourceIterator);