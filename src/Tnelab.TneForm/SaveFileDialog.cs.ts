//�˴����ɻ������ɣ��벻Ҫ�ֶ��޸�
///<reference path="./tnemap.ts"/>
namespace TMiniblink{

	@Tnelab.ToMap("TMiniblink.SaveFileDialog","Tnelab.HtmlView.SaveFileDialog")
	export class SaveFileDialog extends Tnelab.NativeObject {
		@Tnelab.InvokeInfo(undefined,"System.IntPtr")
		public  set OwnerHandle(value:any) { }
		public  get OwnerHandle():any { return undefined; }
		@Tnelab.InvokeInfo(undefined,"System.String")
		public  set Filter(value:string) { }
		public  get Filter():string { return undefined; }
		@Tnelab.InvokeInfo(undefined,"System.String")
		public  set Title(value:string) { }
		public  get Title():string { return undefined; }
		@Tnelab.InvokeInfo(undefined,"System.String")
		public  set File(value:string) { }
		public  get File():string { return undefined; }
		@Tnelab.InvokeInfo("ShowDialog")
		public  ShowDialog():string {return undefined;}
		@Tnelab.InvokeInfo("Equals", "System.Object")
		public  Equals(_obj:any):boolean {return undefined;}
		@Tnelab.InvokeInfo("Equals_", "System.Object","System.Object")
		public static Equals_(_objA:any,_objB:any):boolean {return undefined;}
		@Tnelab.InvokeInfo("GetHashCode")
		public  GetHashCode():number {return undefined;}
		@Tnelab.InvokeInfo("GetType")
		public  GetType():any {return undefined;}
		@Tnelab.InvokeInfo("ReferenceEquals", "System.Object","System.Object")
		public static ReferenceEquals(_objA:any,_objB:any):boolean {return undefined;}
		@Tnelab.InvokeInfo("ToString")
		public  ToString():string {return undefined;}
		public constructor() {super(arguments);}
	}
	Tnelab.RegisterNativeMapAsync("Tnelab.HtmlView.SaveFileDialog","TMiniblink.SaveFileDialog");
}