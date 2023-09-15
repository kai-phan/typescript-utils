import React from 'react';

export namespace Reacts {
  export type CompoundComponent<P, CP> = React.FC<P> & CP;
}
