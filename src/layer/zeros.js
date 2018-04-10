import zeros2D from '../utilities/zeros-2d';
import { Model } from './types';

export default class Zeros extends Model {
  constructor(settings) {
    super(settings);
    this.validate();
    this.weights = zeros2D(this.width, this.height);
    this.deltas = zeros2D(this.width, this.height);
  }
  predict() {}
  compare() {}
}