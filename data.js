// Base fictícia compartilhada entre os sistemas simulados.
window.LAB = {
 projects:[
  {id:'PRJ-2401',name:'Estudos Geotécnicos – Serra Azul',client:'Mineração Horizonte',manager:'Mariana Costa',contract:'CT-2026-014',value:780000,discipline:'Geotecnia'},
  {id:'PRJ-2402',name:'Projeto de Drenagem – Vale Norte',client:'Infraestrutura Aurora',manager:'Rafael Lima',contract:'CT-2026-021',value:540000,discipline:'Hidráulica'},
  {id:'PRJ-2403',name:'Avaliação de Estabilidade – Lagoa Clara',client:'Mineração Horizonte',manager:'Fernanda Oliveira',contract:'CT-2026-029',value:920000,discipline:'Geotecnia'},
  {id:'PRJ-2404',name:'Projeto Executivo – Canal Leste',client:'Águas do Interior',manager:'Daniel Ribeiro',contract:'CT-2026-035',value:460000,discipline:'Civil / Hidráulica'},
  {id:'PRJ-2405',name:'Investigação Geotécnica – Morro Verde',client:'Construções Planalto',manager:'Camila Martins',contract:'CT-2026-041',value:310000,discipline:'Geotecnia'},
  {id:'PRJ-2406',name:'Plano de Instrumentação – Santa Rita',client:'Mineração Nascente',manager:'Lucas Ferreira',contract:'CT-2026-047',value:610000,discipline:'Instrumentação'}
 ],
 docs:[
  {id:'GED-101',project:'PRJ-2401',code:'SA-GEO-REL-001',title:'Relatório de investigação de campo',discipline:'Geotecnia',revision:'R02',status:'Aprovado',issued:'2026-09-11',updated:'2026-09-23',approver:'Coordenação técnica',note:'Parecer aprovado para uso no estudo preliminar.'},
  {id:'GED-102',project:'PRJ-2401',code:'SA-GEO-MEM-002',title:'Memorial de cálculo de estabilidade',discipline:'Geotecnia',revision:'R01',status:'Em revisão',issued:'2026-09-18',updated:'2026-09-30',approver:'Revisão interna',note:'Aguardando ajustes nas premissas do modelo.',next:{status:'Aprovado',revision:'R02',updated:'2026-10-07',note:'Revisão concluída e aprovada.'}},
  {id:'GED-103',project:'PRJ-2401',code:'SA-GEO-DES-003',title:'Desenhos de seções geotécnicas',discipline:'Geotecnia',revision:'R00',status:'Em elaboração',issued:null,updated:'2026-09-27',approver:'Equipe de projeto',note:'Elaboração em andamento.'},
  {id:'GED-201',project:'PRJ-2402',code:'VN-HID-REL-001',title:'Relatório hidrológico',discipline:'Hidráulica',revision:'R03',status:'Aprovado',issued:'2026-09-15',updated:'2026-09-18',approver:'Cliente',note:'Emissão recebida e aceita.'},
  {id:'GED-202',project:'PRJ-2402',code:'VN-HID-DES-002',title:'Projeto de drenagem superficial',discipline:'Hidráulica',revision:'R01',status:'Emitido ao cliente',issued:'2026-09-29',updated:'2026-09-29',approver:'Cliente',note:'Aguardando manifestação do cliente.',next:{status:'Em revisão',revision:'R02',updated:'2026-10-06',note:'Cliente solicitou ajuste de declividade.'}},
  {id:'GED-301',project:'PRJ-2403',code:'LC-GEO-REL-001',title:'Diagnóstico de estabilidade',discipline:'Geotecnia',revision:'R02',status:'Aprovado',issued:'2026-09-12',updated:'2026-09-20',approver:'Cliente',note:'Documento aprovado.'},
  {id:'GED-302',project:'PRJ-2403',code:'LC-GEO-MEM-002',title:'Memorial de análises',discipline:'Geotecnia',revision:'R01',status:'Em revisão',issued:'2026-09-26',updated:'2026-09-30',approver:'Coordenação técnica',note:'Revisão de parâmetros em curso.'},
  {id:'GED-401',project:'PRJ-2404',code:'CL-CIV-DES-001',title:'Plantas do canal',discipline:'Civil',revision:'R01',status:'Emitido ao cliente',issued:'2026-09-25',updated:'2026-09-25',approver:'Cliente',note:'Aguardando aceite.'},
  {id:'GED-402',project:'PRJ-2404',code:'CL-HID-MEM-002',title:'Memorial hidráulico',discipline:'Hidráulica',revision:'R00',status:'Em elaboração',issued:null,updated:'2026-09-28',approver:'Equipe técnica',note:'Documentação em elaboração.',next:{status:'Emitido ao cliente',revision:'R00',issued:'2026-10-06',updated:'2026-10-06',note:'Primeira emissão ao cliente.'}},
  {id:'GED-501',project:'PRJ-2405',code:'MV-GEO-REL-001',title:'Relatório de sondagens',discipline:'Geotecnia',revision:'R01',status:'Aprovado',issued:'2026-09-09',updated:'2026-09-15',approver:'Cliente',note:'Relatório aprovado.'},
  {id:'GED-502',project:'PRJ-2405',code:'MV-GEO-MAP-002',title:'Mapa de localização de furos',discipline:'Geotecnia',revision:'R00',status:'Em elaboração',issued:null,updated:'2026-09-30',approver:'Equipe técnica',note:'Preparando versão inicial.'},
  {id:'GED-601',project:'PRJ-2406',code:'SR-INS-PLN-001',title:'Plano de monitoramento',discipline:'Instrumentação',revision:'R02',status:'Aprovado',issued:'2026-09-19',updated:'2026-09-24',approver:'Cliente',note:'Plano aprovado.'},
  {id:'GED-602',project:'PRJ-2406',code:'SR-INS-ESP-002',title:'Especificações de instrumentos',discipline:'Instrumentação',revision:'R01',status:'Em revisão',issued:'2026-09-28',updated:'2026-09-30',approver:'Coordenação técnica',note:'Revisão técnica em andamento.',next:{status:'Aprovado',revision:'R02',updated:'2026-10-05',note:'Especificação aprovada.'}}
 ],
 measures:[
  {id:'MED-901',project:'PRJ-2401',period:'2026-09',item:'Estudos e relatórios técnicos',value:126000,status:'Liberada',released:'2026-09-28',invoice:'NF-3812',invoiced:126000},
  {id:'MED-902',project:'PRJ-2401',period:'2026-09',item:'Memorial e desenhos',value:64000,status:'Em análise',released:'',invoice:'',invoiced:0,next:{status:'Liberada',released:'2026-10-07'}},
  {id:'MED-903',project:'PRJ-2402',period:'2026-09',item:'Relatório hidrológico',value:87000,status:'Liberada',released:'2026-09-26',invoice:'NF-3815',invoiced:87000},
  {id:'MED-904',project:'PRJ-2402',period:'2026-09',item:'Projeto de drenagem',value:48000,status:'Em análise',released:'',invoice:'',invoiced:0},
  {id:'MED-905',project:'PRJ-2403',period:'2026-09',item:'Diagnóstico e análises',value:164000,status:'Liberada',released:'2026-09-27',invoice:'NF-3820',invoiced:164000},
  {id:'MED-906',project:'PRJ-2404',period:'2026-09',item:'Plantas e projeto executivo',value:72000,status:'Liberada',released:'2026-09-30',invoice:'',invoiced:0,next:{invoice:'NF-3851',invoiced:72000}},
  {id:'MED-907',project:'PRJ-2405',period:'2026-09',item:'Investigação e relatório de sondagens',value:56000,status:'Liberada',released:'2026-09-23',invoice:'NF-3829',invoiced:56000},
  {id:'MED-908',project:'PRJ-2406',period:'2026-09',item:'Plano de instrumentação',value:104000,status:'Em análise',released:'',invoice:'',invoiced:0,next:{status:'Liberada',released:'2026-10-05'}},
  {id:'MED-909',project:'PRJ-2403',period:'2026-10',item:'Acompanhamento técnico',value:38000,status:'Em análise',released:'',invoice:'',invoiced:0,onlyNext:true}
 ]
};
window.fmtMoney=n=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(n);
window.fmtDate=s=>s?new Date(s+'T12:00:00').toLocaleDateString('pt-BR'):'—';
window.snapshot=()=>1;
window.docAt=(d,s)=>s===2&&d.next?{...d,...d.next}:d;
window.medAt=(m,s)=>s===2&&m.next?{...m,...m.next}:m;
window.escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

window.LAB.milestones = [
 {
  "id": "PRJ-2401-M01",
  "project": "PRJ-2401",
  "code": "M01",
  "name": "Investigação de campo aceita",
  "value": 290000,
  "due": "2026-09-25",
  "docs": [
   "SA-GEO-REL-001"
  ],
  "criterion": "Relatório de investigação aprovado pelo cliente"
 },
 {
  "id": "PRJ-2401-M02",
  "project": "PRJ-2401",
  "code": "M02",
  "name": "Memorial e seções geotécnicas",
  "value": 490000,
  "due": "2026-10-20",
  "docs": [
   "SA-GEO-MEM-002",
   "SA-GEO-DES-003"
  ],
  "criterion": "Ambos os documentos aprovados pelo cliente; medição somente após aceite do conjunto"
 },
 {
  "id": "PRJ-2402-M01",
  "project": "PRJ-2402",
  "code": "M01",
  "name": "Estudo hidrológico",
  "value": 210000,
  "due": "2026-09-26",
  "docs": [
   "VN-HID-REL-001"
  ],
  "criterion": "Relatório hidrológico aprovado"
 },
 {
  "id": "PRJ-2402-M02",
  "project": "PRJ-2402",
  "code": "M02",
  "name": "Projeto de drenagem",
  "value": 330000,
  "due": "2026-10-22",
  "docs": [
   "VN-HID-REL-001",
   "VN-HID-DES-002"
  ],
  "criterion": "Relatório hidrológico e desenhos de drenagem aprovados"
 },
 {
  "id": "PRJ-2403-M01",
  "project": "PRJ-2403",
  "code": "M01",
  "name": "Diagnóstico de estabilidade",
  "value": 410000,
  "due": "2026-09-28",
  "docs": [
   "LC-GEO-REL-001"
  ],
  "criterion": "Diagnóstico aprovado pelo cliente"
 },
 {
  "id": "PRJ-2403-M02",
  "project": "PRJ-2403",
  "code": "M02",
  "name": "Análises consolidadas",
  "value": 510000,
  "due": "2026-10-25",
  "docs": [
   "LC-GEO-REL-001",
   "LC-GEO-MEM-002"
  ],
  "criterion": "Diagnóstico e memorial de análises aprovados"
 },
 {
  "id": "PRJ-2404-M01",
  "project": "PRJ-2404",
  "code": "M01",
  "name": "Anteprojeto de canal",
  "value": 170000,
  "due": "2026-10-05",
  "docs": [
   "CL-CIV-DES-001"
  ],
  "criterion": "Plantas aceitas formalmente pelo cliente"
 },
 {
  "id": "PRJ-2404-M02",
  "project": "PRJ-2404",
  "code": "M02",
  "name": "Projeto executivo de canal",
  "value": 290000,
  "due": "2026-10-23",
  "docs": [
   "CL-CIV-DES-001",
   "CL-HID-MEM-002"
  ],
  "criterion": "Plantas e memorial hidráulico aprovados como conjunto"
 },
 {
  "id": "PRJ-2405-M01",
  "project": "PRJ-2405",
  "code": "M01",
  "name": "Campanha de sondagens",
  "value": 140000,
  "due": "2026-09-25",
  "docs": [
   "MV-GEO-REL-001"
  ],
  "criterion": "Relatório de sondagens aprovado"
 },
 {
  "id": "PRJ-2405-M02",
  "project": "PRJ-2405",
  "code": "M02",
  "name": "Relatório completo de investigação",
  "value": 170000,
  "due": "2026-10-18",
  "docs": [
   "MV-GEO-REL-001",
   "MV-GEO-MAP-002"
  ],
  "criterion": "Relatório e mapa de localização de furos aprovados"
 },
 {
  "id": "PRJ-2406-M01",
  "project": "PRJ-2406",
  "code": "M01",
  "name": "Plano de monitoramento",
  "value": 250000,
  "due": "2026-09-28",
  "docs": [
   "SR-INS-PLN-001"
  ],
  "criterion": "Plano aprovado pelo cliente"
 },
 {
  "id": "PRJ-2406-M02",
  "project": "PRJ-2406",
  "code": "M02",
  "name": "Pacote de especificações",
  "value": 360000,
  "due": "2026-10-19",
  "docs": [
   "SR-INS-PLN-001",
   "SR-INS-ESP-002"
  ],
  "criterion": "Plano e especificações de instrumentos aprovados"
 }
];
