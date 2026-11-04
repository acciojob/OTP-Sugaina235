//your JS code here. If required.
const codes=document.querySelectorAll('.code');
if(codes.length>0){
	codes[0].focus();
}
codes.forEach((code,idx)=>{
	code.addEventListener('keydown',(e)=>{
		if(e.key>=0 && e.key<=9){
			code.value='';
			setTimeout(()=>{
				if(codes[idx+1]){
				codes[idx+1].focus();	
				}},10); }else if(e.key==='Backspace'){
			
			if(code.value!==''){
				e.preventDefault();
				code.value='';
			}else if(codes[idx-1]){
		e.preventDefault();
codes[idx-1].focus();
			}
				}
		
	});
});
