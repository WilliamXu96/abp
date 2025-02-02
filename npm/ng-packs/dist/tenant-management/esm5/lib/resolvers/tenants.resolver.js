/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { TenantManagementGet } from '../actions/tenant-management.actions';
import { TenantManagementState } from '../states/tenant-management.state';
var TenantsResolver = /** @class */ (function () {
    function TenantsResolver(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    TenantsResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = this.store.selectSnapshot(TenantManagementState.get);
        return data && data.length
            ? null
            : this.store.dispatch(new TenantManagementGet());
    };
    TenantsResolver.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TenantsResolver.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return TenantsResolver;
}());
export { TenantsResolver };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantsResolver.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50cy5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGVuYW50LW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvcmVzb2x2ZXJzL3RlbmFudHMucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRTtJQUVFLHlCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7SUFFcEMsaUNBQU87OztJQUFQOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7UUFDakUsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU07WUFDekIsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0JBVEYsVUFBVTs7OztnQkFMRixLQUFLOztJQWVkLHNCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksZUFBZTs7Ozs7O0lBQ2QsZ0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRHZXQgfSBmcm9tICcuLi9hY3Rpb25zL3RlbmFudC1tYW5hZ2VtZW50LmFjdGlvbnMnO1xuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy90ZW5hbnQtbWFuYWdlbWVudCc7XG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50U3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvdGVuYW50LW1hbmFnZW1lbnQuc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVuYW50c1Jlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxUZW5hbnRNYW5hZ2VtZW50LlN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxuXG4gIHJlc29sdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoVGVuYW50TWFuYWdlbWVudFN0YXRlLmdldCk7XG4gICAgcmV0dXJuIGRhdGEgJiYgZGF0YS5sZW5ndGhcbiAgICAgPyBudWxsIFxuICAgICA6IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRlbmFudE1hbmFnZW1lbnRHZXQoKSk7XG4gIH1cbn1cbiJdfQ==