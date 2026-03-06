/**
 * Mapeo de Grupos de Permisos — NexoDesk
 *
 * tagg:
 *  "root"    → controladores de panel general
 *  "admin"   → vistas del panel de administración
 *  "contable" → vistas del panel contable (informes, ingreso de datos, inicialización)
 */
const PERMISSION_GROUPS = {

    // ─── PANEL ROOT ───────────────────────────────────────────────────
    acceso_panel_admin: {
        label: "Panel: Administración",
        tagg: "root",
        permissions: [
            { id: "view_panel_admin", label: "Habilitar Panel de Administración" },
        ],
    },
    acceso_panel_contable: {
        label: "Panel: Contable",
        tagg: "root",
        permissions: [
            { id: "view_panel_contable", label: "Habilitar Panel Contable" },
        ],
    },

    // ─── INFORMES ─────────────────────────────────────────────────────
    libro_compras: {
        label: "Vista: Libro de Compras",
        tagg: "contable",
        permissions: [
            { id: "view_libro_compras", label: "Acceso a la vista" },
            { id: "export_libro_compras", label: "Exportar / descargar libro de compras", dependency: "view_libro_compras" },
        ],
    },
    libro_honorarios_compras: {
        label: "Vista: Libro Honorarios Compras",
        tagg: "contable",
        permissions: [
            { id: "view_libro_honorarios_compras", label: "Acceso a la vista" },
            { id: "export_libro_honorarios_compras", label: "Exportar / descargar", dependency: "view_libro_honorarios_compras" },
        ],
    },
    libro_ventas: {
        label: "Vista: Libro de Ventas",
        tagg: "contable",
        permissions: [
            { id: "view_libro_ventas", label: "Acceso a la vista" },
            { id: "export_libro_ventas", label: "Exportar / descargar libro de ventas", dependency: "view_libro_ventas" },
        ],
    },
    renta: {
        label: "Vista: Renta",
        tagg: "contable",
        permissions: [
            { id: "view_renta", label: "Acceso a la vista" },
            { id: "export_renta", label: "Exportar / descargar renta", dependency: "view_renta" },
        ],
    },

    // ─── INGRESO DE DATOS ─────────────────────────────────────────────
    caja_banco: {
        label: "Vista: Caja Banco",
        tagg: "contable",
        permissions: [
            { id: "view_caja_banco", label: "Acceso a la vista" },
            { id: "create_caja_banco", label: "Crear registros", dependency: "view_caja_banco" },
            { id: "edit_caja_banco", label: "Editar registros", dependency: "view_caja_banco" },
            { id: "delete_caja_banco", label: "Eliminar registros", dependency: "view_caja_banco" },
            { id: "import_caja_banco", label: "Importar desde archivo", dependency: "view_caja_banco" },
            { id: "export_caja_banco", label: "Exportar registros", dependency: "view_caja_banco" },
        ],
    },
    clientes_proveedores: {
        label: "Vista: Clientes y Proveedores",
        tagg: "contable",
        permissions: [
            { id: "view_clientes_proveedores", label: "Acceso a la vista" },
            { id: "create_clientes_proveedores", label: "Crear registros", dependency: "view_clientes_proveedores" },
            { id: "edit_clientes_proveedores", label: "Editar registros", dependency: "view_clientes_proveedores" },
            { id: "delete_clientes_proveedores", label: "Eliminar registros", dependency: "view_clientes_proveedores" },
            { id: "import_clientes_proveedores", label: "Importar desde archivo", dependency: "view_clientes_proveedores" },
            { id: "export_clientes_proveedores", label: "Exportar registros", dependency: "view_clientes_proveedores" },
        ],
    },

    // ─── INICIALIZACIÓN / INTEGRACIÓN SII ────────────────────────────
    integracion_boletas_honorarios_sii: {
        label: "Vista: Integración Boletas Honorarios SII",
        tagg: "contable",
        permissions: [
            { id: "view_integracion_boletas_honorarios_sii", label: "Acceso a la vista" },
            { id: "sync_integracion_boletas_honorarios_sii", label: "Sincronizar con SII", dependency: "view_integracion_boletas_honorarios_sii" },
        ],
    },
    integracion_boletas_venta_sii: {
        label: "Vista: Integración Boletas Venta SII",
        tagg: "contable",
        permissions: [
            { id: "view_integracion_boletas_venta_sii", label: "Acceso a la vista" },
            { id: "sync_integracion_boletas_venta_sii", label: "Sincronizar con SII", dependency: "view_integracion_boletas_venta_sii" },
        ],
    },
    integracion_libros_compra_venta_sii: {
        label: "Vista: Integración Libros Compra/Venta SII",
        tagg: "contable",
        permissions: [
            { id: "view_integracion_libros_compra_venta_sii", label: "Acceso a la vista" },
            { id: "sync_integracion_libros_compra_venta_sii", label: "Sincronizar con SII", dependency: "view_integracion_libros_compra_venta_sii" },
        ],
    },

    // ─── ADMINISTRACIÓN ───────────────────────────────────────────────
    usuarios: {
        label: "Vista: Usuarios",
        tagg: "admin",
        permissions: [
            { id: "view_usuarios", label: "Acceso a la vista" },
            { id: "create_usuarios", label: "Crear usuarios", dependency: "view_usuarios" },
            { id: "edit_usuarios", label: "Editar usuarios", dependency: "view_usuarios" },
            { id: "delete_usuarios", label: "Eliminar usuarios", dependency: "view_usuarios" },
        ],
    },
    gestor_roles: {
        label: "Vista: Roles y Permisos",
        tagg: "admin",
        permissions: [
            { id: "view_gestor_roles", label: "Acceso a la vista" },
            { id: "create_gestor_roles", label: "Crear nuevos roles", dependency: "view_gestor_roles" },
            { id: "edit_gestor_roles", label: "Editar roles existentes", dependency: "view_gestor_roles" },
            { id: "delete_gestor_roles", label: "Eliminar roles", dependency: "view_gestor_roles" },
        ],
    },
    dashboard_contratos: {
        label: "Vista: Contratos",
        tagg: "admin",
        permissions: [
            { id: "view_dashboard_contratos", label: "Acceso a la vista" },
            { id: "create_dashboard_contratos", label: "Crear contratos", dependency: "view_dashboard_contratos" },
            { id: "edit_dashboard_contratos", label: "Editar contratos", dependency: "view_dashboard_contratos" },
            { id: "delete_dashboard_contratos", label: "Eliminar contratos", dependency: "view_dashboard_contratos" },
            { id: "sign_dashboard_contratos", label: "Firmar contratos", dependency: "view_dashboard_contratos" },
        ],
    },
    pagos: {
        label: "Vista: Cobranza y Pagos",
        tagg: "admin",
        permissions: [
            { id: "view_pagos", label: "Acceso a la vista" },
            { id: "create_pagos", label: "Generar cobros", dependency: "view_pagos" },
            { id: "edit_pagos", label: "Aprobar / rechazar pagos", dependency: "view_pagos" },
        ],
    },
    registro_logins: {
        label: "Vista: Registro de Ingresos",
        tagg: "admin",
        permissions: [
            { id: "view_registro_logins", label: "Acceso a la vista" },
        ],
    },
};

module.exports = { PERMISSION_GROUPS };
